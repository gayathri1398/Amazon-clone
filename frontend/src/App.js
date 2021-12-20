import React from 'react';


// components
import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage';

// HOC
import HomeHocLayout from "./ḤOC/HomeHocLayout";

 function App() {
  return (
   <>
  <HomeHocLayout path="/" exact component={HomePage} />
  <HomeHocLayout path="/product/:_id" exact component={ProductPage}/>
  
  </>  
  )
}
export default App;
