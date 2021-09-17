import './Header.css'
import React, { Component } from 'react'

 class Header extends Component {

constructor(props){  

super({      })
 this.state={
     rowMovie: false,
    }
    
}

rowMovie(){ if(this.state.rowMovie){
          this.setState({
            rowMovie:false,
            columnMovie: true
          })
        } else {
          this.setState({
            rowMovie: true,
          })
  
        } }

    render() {
      return(
            
                    <div >
            <h1 className="titulo">Nuflix</h1>
            <p className="orden">Ordenar ASC/ DESC</p>

            <div className="TopbarContainer">

                

                
                {/* <i className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></i> ver desp si se puede poner un button sin sacar i 
                <i className="fas fa-align-justify"><img className="leftarrow" src={"/assets/img/menu2.jpeg"}/></i> */}

               {/*<button onClick={()=>this.horizontal()} className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></button> flex direction con row y flex direction con column*/}
                { <button onClick={()=>this.rowMovie()}  className={`fas fa-align-justify rowMovie ? columnMovie : rowMovie`}><img className="logoIgual" src={"/assets/img/menu2.jpeg"}/></button>}

               {/*</div><div className ={`container ${this.state.selected ? "active" : " "}`} onDoubleClick = {()=>this.selected()}>*/}


                {/* <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i></button>
                </form> */}
                    
                </div>

            </div>
      )  
        }
      
    }





export default Header;