import { Outlet } from 'react-router-dom';

import { NavBar } from '@/widgets/NavBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
    </div>
  );
};
