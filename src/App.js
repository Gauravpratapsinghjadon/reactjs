import React, { Suspense, lazy } from 'react';
import { createBrowserHistory } from "history";
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import PrivateRoute from './Routes/PrivateRoutes'
import Routes from './Routes/Routes'
import { isLogin, logout, login } from './Utlis/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInSide from './Screens/Login/Login'
import SignUp from './Screens/SignUp/SignUp'
import Home from './Screens/Home/Home'
import './Assets/style.css'
const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <PrivateRoute path='/logout' component={Users} />
          <Routes path='/login' component={SignInSide} />
          <Routes path='/signup' component={SignUp} />
          <Routes path='/' component={Home} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Users() {
  logout()
  return <h2>Users</h2>;
}