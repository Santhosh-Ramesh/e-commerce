import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
