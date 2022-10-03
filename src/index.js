import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/ContactsBook/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <BrowserRouter basename="/goit-react-hw-08-phonebook/"> */}
        <App />
        {/* </BrowserRouter> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
