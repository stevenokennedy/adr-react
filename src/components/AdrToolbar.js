import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

class AdrToolbar extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" className={this.props.classes.grow}>
              Architecture Decision Records
            </Typography>
            <Button variant="contained" color="primary">Create</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AdrToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdrToolbar);
