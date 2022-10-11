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

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[2]}px;
  text-alight: centr;
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  margin-left: ${p => p.theme.space[3]}px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.accent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentFocus};
  }
`;
