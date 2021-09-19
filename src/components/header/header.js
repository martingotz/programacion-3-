import './Header.css'
import React, { Component } from 'react'


 class Header extends Component {

constructor(props){  

super(props)
 this.state={
    //  view: "rowMovie"
    }
    
}


// rowMovie(){
//     this.setState({
//         view:"rowMovie"
//     })
// }
// columnMovie(){
//     this.setState({
//         view:"columnMovie"
//     })
// }

    render() {
      return(
            
                    <div>
            <h1 className="titulo">Nuflix</h1>
            <p className="orden">Ordenar ASC/ DESC</p>

       
            <div >
            {/* <button onClick ={()=>this.columnMovie()}   ><img className="logoIgual" src={"/assets/img/menu2.jpeg"}/> {()=>this.columnMovie()}</button>

            <button  onClick={()=>this.rowMovie()}><img className="logoIgual" src={"/assets/img/menu.jpeg"}/>  {()=>this.rowMovie()}</button> */}




{/* 
                  <form action="">
                <input  filter={this.state.filter} searchfilter={()=> this.searchfilter()}  filter={this.state.filter} type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i> </button>
                </form> */}

                
        
                </div>

            </div>
      )  
        }
      
    }





export default Header;