import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Username = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
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
