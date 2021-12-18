import React from 'react';


// components
import HomePage from "./pages/HomePage";

// HOC
import HomeHocLayout from "./ḤOC/HomeHocLayout";

 function App() {
  return (
   <>
  <HomeHocLayout path="/" exact component={HomePage} />
  
  </>  
  )
}
export default App;
