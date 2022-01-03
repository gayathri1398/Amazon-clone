import React from 'react';
import { Route } from 'react-router-dom';


// components
import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

// HOC
import HomeHocLayout from "./ḤOC/HomeHocLayout";

 function App() {
  return (
   <>
  <HomeHocLayout path="/" exact component={HomePage} />
  <HomeHocLayout path="/product/:_id" exact component={ProductPage}/>
  <Route path="/cart/:_id?" exact component={CartPage}/>
  
  </>  
  )
}
export default App;
