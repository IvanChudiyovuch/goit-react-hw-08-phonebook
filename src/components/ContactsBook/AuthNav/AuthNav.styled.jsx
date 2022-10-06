import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
