import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import  './App.css'


 class App extends Component {
   constructor(props){
     super(props)
     this.state ={
        filter: false,
        
      }
   }

//   rowMovie(){
//     this.setState({
//         view:"rowMovie"
//     })
// }
// columnMovie(){
//     this.setState({
//         view:"columnMovie"
//     })
// }


  //  searchfilter(){

  //  }
  render() {
    return (
      <div>
            
      
      <Header columnMovie={()=>this.columnMovie()}  rowMovie={()=>this.rowMovie()}  
       filter={this.state.filter} searchfilter={()=> this.searchfilter()}/>
     

      <div className={`${this.state.view ==   "rowMovie" ? 'rowMovie' : 'columnMovie'}`}  >
      <Movies filter={this.state.filter} view={this.state.view}/> 
      </div>
      
      <Footer/>
      
      </div>
    )
  }
}


export default App;