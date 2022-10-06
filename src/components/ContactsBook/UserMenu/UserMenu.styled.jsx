import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Username = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
