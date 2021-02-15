import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: 'darkslategray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: '16px',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <Typography variant="h6" className={classes.text}>
        Tickets System
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
