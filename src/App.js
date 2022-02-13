import React from 'react';
import ReactDOM from 'react-dom';
import ListCampaign from './components/UI/ListCampaign/ListCampaign';

import './styles/globals.scss';

const App = () => (
  <>
    <ListCampaign />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
