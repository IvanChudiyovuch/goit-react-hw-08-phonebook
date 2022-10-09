import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: 1px solid ${p => p.theme.colors.black};
`;
