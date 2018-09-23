'use strict';

const React = require("react");
const AdrViewer = require("./components/adr-viewer.js");

class MainApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="leftNav"></div>
        <div id="mainArea">
          <AdrViewer />
        </div>
      </div>
    );
  }
}

export default MainApp