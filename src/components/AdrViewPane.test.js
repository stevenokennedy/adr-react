import React from 'react';
import ReactDOM from 'react-dom';
import AdrViewPane from './AdrViewPane';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdrViewPane />, div);
  ReactDOM.unmountComponentAtNode(div);
});