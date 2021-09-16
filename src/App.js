import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import  './App.css'

 class App extends Component {
  render() {
    return (
      <div>
            
      <div>
      <Header/>
      </div>

      <div>
      <Movies/>
      </div>

      <div> 
      <Footer/>
      </div> 
      </div>
    )
  }
}
/*
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
};*/

export default App;