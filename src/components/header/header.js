import React from 'react'
import './Header.css'


function Header(props) {

return( 
        <>
            <div >
            <h1 className="titulo">Nuflix</h1>
            <p className="orden">Ordenar ASC/ DESC</p>

            <div className="TopbarContainer">

                

                
                {/* <i className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></i> ver desp si se puede poner un button sin sacar i 
                <i className="fas fa-align-justify"><img className="leftarrow" src={"/assets/img/menu2.jpeg"}/></i> */}

               {/*<button onClick={()=>this.horizontal()} className="fas fa-th"><img className="leftarrow" src={"/assets/img/menu.jpeg"}/></button> flex direction con row y flex direction con column*/}
                <button onClick={()=>this.vertical()} className="fas fa-align-justify"><img className="leftarrow" src={"/assets/img/menu2.jpeg"}/></button>
                <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i></button>
                </form>
                    
                </div>
           
            </div>

        </>

 )

    
}
export default Header;