import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import  './App.css'

 class App extends Component {
   constructor(props){
     super(props)
     this.state ={
        filter: false,
        horizontal:false
     }
   }
   view (){
      if(this.state.horizontal){
        this.setState({
          horizontal:false,
        })
      } else {
        this.setState({
          horizontal: true,
        })

      }
   }
   searchfilter(){

   }
  render() {
    return (
      <div>
            
      <div>
      <Header  className={`${this.state.horizontal} ? false : true `} onClick={()=>this.horizontal()} filter={this.state.filter} searchfilter={()=> this.searchfilter()}/>
      </div>

      <div>
      <Movies filter={this.state.filter}/>
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