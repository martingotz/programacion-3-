import React, { Component } from 'react'
import './Topbar.css';


 class Topbar extends Component {
<<<<<<< HEAD


constructor(){

super();

this.state = {  

view: false

}  }


horizontal(){ 

}

vertical(){ 

}







=======
    
>>>>>>> a98d7f648a417d1f5b4d2f7ff7695373d8ea35b0
    render() {
        return (
            <>
            <p className="orden">Ordenar ASC/ DESC</p>
            <div className="TopbarContainer">

                

                
                {/* <i className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></i> ver desp si se puede poner un button sin sacar i 
                <i className="fas fa-align-justify"><img className="leftarrow" src={"/assets/img/menu2.jpeg"}/></i> */}

                <button onClick={()=>this.horizontal()} className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></button>
                <button onClick={()=>this.vertical()} className="fas fa-align-justify"><img className="leftarrow" src={"/assets/img/menu2.jpeg"}/></button>
                <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i></button>
                </form>
                    

            </div>

            <br/>
            <br/>
            <button className="cargartarjeta" onClick={() => this.add()}>Cargar más tarjetas</button>
            </>
        )
    }
}


export default Topbar;