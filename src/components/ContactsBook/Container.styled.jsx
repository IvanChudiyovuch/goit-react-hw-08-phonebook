import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 400px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: ${p => p.theme.colors.colorcell};
`;
