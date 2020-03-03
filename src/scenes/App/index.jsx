import React from 'react';
import './styles.scss';
import Navigation from './components/Navigation'
import { Route } from "react-router-dom";
import Library from '../Library'
import Reader from '../Reader'
import Add from '../Add'
import Extensions from '../Extensions'

class App extends React.Component {
  render() {
    console.log(this.props)
  return (
    <div className="wrapper">
      <Navigation />
      <div className="work-area">
      <Route path="/reader" component={Reader} />
      <Route path="/library" component={Library} />
      <Route path="/add" component={Add} />
      <Route path="/extensions" component={Extensions} />
      </div>
    </div>  );
};
}


export default App;
