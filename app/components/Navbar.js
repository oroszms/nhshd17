// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import LoggedInMenu from './LoggedInMenu';

export default class Navbar extends Component {
  render() {
    return (
      <AppBar
        title="FollowApp"
        iconElementLeft={ <LoggedInMenu /> }
        titleStyle={{'fontSize': '40px', 'textAlign': 'center'}}
        onClick={() => hashHistory.push('/settings')}
      />
    );
  }
}
