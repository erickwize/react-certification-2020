import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Header, LogIcon, LoginContainer, MenuIcon, Row } from './Header.styles';
import { ToggleSwitch } from '../atoms';
import { SearchBar } from '../molecules';

const MainHeader = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Header darkMode={isToggled}>
      <Row>
        <Col size={1}>
          <MenuIcon />
        </Col>
        <Col size={4}>
          <SearchBar />
        </Col>
        <Col size={1}>
          <ToggleSwitch
            id="test-switch"
            toggled={isToggled}
            onChange={(e) => setIsToggled(e.target.checked)}
          />
        </Col>
        <Col size={1}>
          <LoginContainer>
            <Link to="/login">
              Login <LogIcon />
            </Link>
          </LoginContainer>
        </Col>
      </Row>
    </Header>
  );
};

export default MainHeader;
