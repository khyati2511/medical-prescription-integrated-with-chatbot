import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from '../ViewController/Login';
import Register from '../ViewController/Register';
import Home from '../ViewController/Home';
import PatientDetails from '../ViewController/PatientDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/patientDetails" component={PatientDetails} />
      </Switch>
    </Router>
  );
};
export default App;
