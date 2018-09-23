import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { GridList, Card, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
});

class AdrViewPane extends Component {
  render() {
    let classes = this.props.classes;
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}>
          {
            this.props.adrList.map(tile => {
              return (
                <Grid item key={tile} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia className={classes.media} image={tile.img} title={tile.title} />
                      <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">{tile.id}</Typography>
                        <Typography variant="title">{tile.title}</Typography>
                        <Typography variant="subheading">{tile.description}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" colour="primary">View</Button>
                      <Button size="small" colour="primary">Edit</Button>
                      <Button size="small" colour="primary">Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>);
              })
          }
        </Grid>
      </div>
    );
  }
}

AdrViewPane.propTypes = {
  classes: PropTypes.object.isRequired,
  adrList: PropTypes.array.isRequired
};

export default withStyles(styles)(AdrViewPane);

