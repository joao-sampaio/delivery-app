import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/Customer/CustomerOrders';
import Login from './pages/Login';
import Products from './pages/Products';
import SellerOrdersDetails from './pages/Seller/SellerOrderDetail';
import SellerOrders from './pages/Seller/SellerOrders';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Cadastro } />
        <Route path="/customer/orders/:id" />
        <Route path="/seller/orders/:id" component={ SellerOrdersDetails } />
        <Route path="/customer/orders" component={ CustomerOrders } />
        <Route path="/seller/orders" component={ SellerOrders } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </UserProvider>
  );
}

export default App;
