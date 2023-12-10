import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 50px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;

  &.active {
    background-color: #3470ff;
    color: white;
  }
`;
