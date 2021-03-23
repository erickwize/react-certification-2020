import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import SearchIcon from '@material-ui/icons/Search';
import VideoCard from './Card.component';
import Items from '../../mocks/youtube-videos-mock.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sideActions: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  darkMode: {
    marginRight: '1em',
  },
  headline: {
    margin: '2em 0',
    '& > h2': {
      color: 'white'
    }
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <FilledInput
              id="standard-adornment-password"
              type="text"
              startAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                  >
                    <SearchIcon htmlColor="white" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={classes.sideActions}>
            <Switch aria-label="login switch" />
            <Typography className={classes.darkMode}>Dark mode</Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.headline}>
        <Typography variant="h2" align="center">
          Welcome to the Challenge!
        </Typography>
      </div>
      <div className={classes.itemsContainer}>
        {Items.items.map((item, index) => {
          return ( 
            <VideoCard
              key={index}
              description={item.snippet.description}
              image={item.snippet.thumbnails.high.url}
              title={item.snippet.title}
            />
          )
        })}
      </div>
    </div>
  );
}
