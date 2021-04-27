import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Background, Menu, UserName, Item, Title } from './Sidebar.styled';
import Icon from '../Icons';
import { useGlobalProvider } from '../../store/global/global.provider';

const Sidebar = ({ menu, setMenu }) => {
  const {
    state: { user },
  } = useGlobalProvider();

  const handleSidebar = () => {
    setMenu(!menu);
  };

  const userName = user?.email.split('@')[0];

  return (
    <>
      <Background show={menu} onClick={handleSidebar} />
      <Container show={menu}>
        <Menu>
          <UserName>{user ? userName : 'Welcome'}</UserName>
          <Link to="/" onClick={handleSidebar}>
            <Item>
              <Icon viewBox="0 0 24 24" icon="home" color="black" />
              <Title>Home</Title>
            </Item>
          </Link>
          {user && (
            <Link to="/favorites" onClick={handleSidebar}>
              <Item>
                <Icon viewBox="0 0 24 24" icon="favoriteVideos" color="black" />
                <Title>Favorites</Title>
              </Item>
            </Link>
          )}
        </Menu>
      </Container>
    </>
  );
};

export default Sidebar;
