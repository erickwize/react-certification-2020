import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';

import {
  AppBar,
  EndBar,
  SearchStyled,
  TextField,
  Toolbar,
  Switch,
} from './Header.styled';
import { useAppContext } from '../../state/AppProvider';
import { themes } from '../../state/ThemeProvider';

const Header = () => {
  const { setTheme, theme } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
    </Menu>
  );

  const handleDarkMode = () => {
    if (theme === themes.light) setTheme(themes.dark);
    else setTheme(themes.light);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <SearchStyled>
            <Search />
            <TextField label="Search..." defaultValue="Wizeline" />
          </SearchStyled>
          <EndBar>
            <Switch onChange={handleDarkMode} />
            <p>Dark mode</p>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </EndBar>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};

export default Header;
