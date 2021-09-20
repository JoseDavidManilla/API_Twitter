import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Createtweet from './components/Createtweet';
import BusquedaGlobal from './components/BusquedaGlobal';
import BusquedaUSuario from './components/config'
function App() {
  return (
      <Router>
      <div className="container p-4">
      <Route path="/Tweets" component={Createtweet}/>
      <Route path="/Search" component={BusquedaGlobal}/>
      <Route path="/Users" component={BusquedaUSuario}/>
      </div>
    </Router>
  );
}

export default App;
