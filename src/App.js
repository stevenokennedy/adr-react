import React, { Component } from 'react';
import AdrViewPane from './components/AdrViewPane';
import AdrToolbar from './components/AdrToolbar';
import { CssBaseline, Grid } from '@material-ui/core';

const testData = {
  adrs: [
    {
      id: "ADR-0001",
      title: "ADR title",
      description: "This is the descriptive text bit"
    },
    {
      id: "ADR-0002",
      title: "ADR title",
      description: "This is the descriptive text bit"
    },
    {
      id: "ADR-0003",
      title: "ADR title",
      description: "This is the descriptive text bit"
    },
    {
      id: "ADR-0004",
      title: "ADR title",
      description: "This is the descriptive text bit"
    },/*
    {
      img: "image2",
      title: "Image2 title"
    },
    {
      img: "image3",
      title: "Image2 title"
    },
    {
      img: "image4",
      title: "Image2 title"
    },
    {
      img: "image5",
      title: "Image2 title"
    }*/
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Grid container spacing={40}>
          <Grid item sm={3} md={3} lg={2}>
            <div className="LeftMenu"></div>
          </Grid>
          <Grid item sm={9} md={9} lg={10}>
            <AdrToolbar />
            <AdrViewPane adrList={testData.adrs}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
