import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuItem : {
      position: 'center',
      textDecoration:'none',
      color: 'black',
      fontWeight:'bold',
      marginLeft: '5px',
      textAlign : 'center',
      justifyContent: 'center',
      float:'none',

  },
};

function MenuBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" centered>
        <Toolbar>
          <Link to={"/"} className={classes.menuItem}>Men</Link>
          <Link to={"/"} className={classes.menuItem}>Women</Link>
          <Link to={"/"} className={classes.menuItem}>Shoes</Link>
          <Link to={"/"} className={classes.menuItem}>Sales</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);