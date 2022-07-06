import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import MoviesForm from './components/movieForm';
import NavBar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import Products from './components/products';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import Posts from './components/posts';
import Customers from './components/customers';
import Rentals from './components/rentals';
import { withRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
 
  render() {
    return (
      <>
        <NavBar />
        <main className='container'>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/:id" component= {MoviesForm} />
              <Route path="/movies" component= {Movies} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products" render={props => <Products sortBy="newest" {...props}/>} />
              <Route path="/posts/:year?/:month?" component={Posts} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/admin" component={Dashboard} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default withRouter(App);