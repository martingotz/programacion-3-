import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import  './App.css'
function App()
 {
  return (
    <>
    <div>
  <Header/>
  </div>

  <div>
  <Movies/>
  </div>

  <div> 
  <Footer/>
  </div> 
  </>
  )   
};
export default App;