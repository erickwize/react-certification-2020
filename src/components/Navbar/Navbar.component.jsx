import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHome,
  faMoon,
  faSignInAlt,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Left, Center, Right, SearchInput, Active, Icon } from './Navbar.styles';

// import './Navbar.styles.css';

function Navbar() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => setDarkTheme(!darkTheme);

  return (
    <Wrapper>
      <Left>
        <SearchInput type="text" placeholder="Search..." />
      </Left>
      <Center>
        <Active>
          <FontAwesomeIcon icon={faHome} />
        </Active>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
      </Center>
      <Right>
        <Icon>
          <FontAwesomeIcon icon={faSignInAlt} />
        </Icon>
        <Icon>
          {darkTheme ? (
            <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
          ) : (
            <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
          )}
        </Icon>
      </Right>
    </Wrapper>
  );
}

export default Navbar;
