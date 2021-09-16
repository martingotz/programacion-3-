import React from 'react'
import Topbar from '../Topbar/Topbar';
import './Header.css'


function Header() {

return( 
        <>
            <header >
            <h1 className="titulo">Nuflix</h1>


            <section>
            <p className="orden">Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i></button>
                </form>
            </section>  

            </header>

        </>

 )

    
}
export default Header;