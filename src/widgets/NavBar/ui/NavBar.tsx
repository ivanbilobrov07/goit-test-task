import { Header, NavList, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Header>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>
        </NavList>
      </nav>
    </Header>
  );
};
