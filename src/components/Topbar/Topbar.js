import React, { Component } from 'react'
import './Topbar.css';


 class Topbar extends Component {
    
    render() {
        return (
            <>
            <div className="TopbarContainer">

                

                
                <p className="orden">Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i></button>
                </form>
                    

            </div>

            <br/>
            <br/>
            {/*<button className="cargartarjeta" onClick={() => this.add()}>Cargar más tarjetas</button>*/}
            </>
        )
    }
}


export default Topbar;