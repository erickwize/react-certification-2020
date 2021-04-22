import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu } from './Sidebar.styled';
import { useGlobalProvider } from '../../store/global/global.provider';

const Sidebar = ({ menu, setMenu }) => {
  const {
    state: { user },
  } = useGlobalProvider();

  const handleSidebar = () => {
    setMenu(!menu);
  };
  return (
    <Container show={menu ? 1 : 0}>
      <Menu>
        <h3>{user && user.name}</h3>
        <Link to="/" onClick={handleSidebar}>
          Home
        </Link>
        {user && (
          <Link to="/favorites" onClick={handleSidebar}>
            Favorites
          </Link>
        )}
      </Menu>
    </Container>
  );
};

export default Sidebar;
