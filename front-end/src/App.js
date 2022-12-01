import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Cadastro } />
        <Route path="/customer/products" />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
