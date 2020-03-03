import React from 'react';
import './styles.scss';
import Navigation from './components/Navigation'
import Study from './components/Study'

class Reader extends React.Component {

  render() {

  return (
    <div className="reader-wrapper">
        <Navigation />
      <div className="reader-workarea">
        <Study />
      </div>
    </div>  );
};
}

export default Reader;

