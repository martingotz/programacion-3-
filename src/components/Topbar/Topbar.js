import React, { Component } from 'react'

 class Topbar extends Component {
    render() {
        return (
            <div>
                
                <p>Ordenar ASC/ DESC</p>
                <i className="fas fa-th"></i>
                <i className="fas fa-align-justify"></i>
                <form action="">
                <input type="text" name="search" id="" placeholder="Search" />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>


            </div>
        )
    }
}


export default Topbar;