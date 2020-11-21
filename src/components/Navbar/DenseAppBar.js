import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import "../Navbar/Navbar.css"
import { AccountCircle, FilterNone } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(5),
  },
  searchButton: {
    marginRight: theme.spacing(70),
    marginLeft: theme.spacing(2),
    fontSize:'15px',
    borderRadius:'5px',
    padding:'8px',
    backgroundColor:'rgb(128,84,47)',
    '&:hover':{
      backgroundColor:'rgb(128,84,47)'
    }
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    },
  },
  account:{
    position:"absolute",
    marginRight:"0px",
    marginLeft:'80%',
    border:"none"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
    },
  },
}));


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <AppBar style={{backgroundColor:" rgb(77, 161, 21)"}} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton 
            edge="start"
            className={classes.searchButton}
            color="inherit"
            aria-label="open drawer"
          >
            Искать
            {/* <SearchIcon /> */}
          </IconButton>
            
                <div style={{display:"flex"}}>
                  {/* <AccountCircle  style={{fontSize:'35px'}}/> */}
                  <Link to='/signin'>Вход </Link>
                  <h5>&nbsp;/&nbsp;</h5>
                  <Link to="signup">Регистрация</Link>
                </div>
           
            
        </Toolbar>
      </AppBar>
    </div>
  );
}