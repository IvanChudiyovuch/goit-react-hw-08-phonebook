import { TailSpin } from 'react-loader-spinner';
import { Load } from './Loader.styled';

export const Loader = () => {
  return (
    <Load>
      <TailSpin height="15" width="15" radius="1" />
    </Load>
  );
};
