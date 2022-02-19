import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Login from '../ViewController/Login';
import Register from '../ViewController/Register';

function App() {
  return (
    <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
