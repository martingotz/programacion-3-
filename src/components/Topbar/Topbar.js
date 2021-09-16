import React, { Component } from 'react'
import './Topbar.css';


 class Topbar extends Component {
    constructor(props){
        super(props)
        this.state ={ 
           moviesOriginal: [],
           moviesFilter:[],
           nexturl:"",
           
        }
    }

    add (){
        const url = this.state.nexturl;
        fetch(url)
        .then((respuesta)=> respuesta.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                nexturl:data.next,
               addMovies: this.state.addMovies.concat(data.results),
            });
        })
        .catch((e)=> console.log(e))
    }
    original(){
        this.setState({
            moviesFilter: this.state.moviesOriginal,
            nexturl: 'https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=2'
        })

    }
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