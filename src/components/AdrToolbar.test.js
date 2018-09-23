import React from 'react';
import ReactDOM from 'react-dom';
import AdrToolbar from './AdrToolbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdrToolbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});