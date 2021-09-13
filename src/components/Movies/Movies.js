import React, { Component } from 'react';
import Card from '../Card/Card';

 class Movies extends Component {
     constructor(props){
         super(props)
         this.state ={ 
            moviesOriginal: [],
            moviesFilter:[],
            nexturl:"",
            
         }
     }
     componentDidMount(){
         console.log("Component did mount");
         const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=1'
         fetch(url)
         
         .then((respuesta)=>respuesta.json()) 
       .then((data)=> {
           this.setState({
               moviesOriginal: data.results,
               moviesFilter: data.results,
               nexturl: data.next, // Va con agregar mas 
           })


       })
       .catch (e=> console.log(e))
     };
     componentDidUpdate(){
         console.log("componentDidUpdate");
     }
     add (){
        const url= this.state.nexturl
        
         fetch(url)
             .then((respuesta) => respuesta.json())
             .then((data) => {
                 this.setState({
                     nexturl: 'https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=1'

                 })
                   })
     }
    /*
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
    */
    deleteCard(id){
        console.log(id);
        const moviesDelete = this.state.moviesOriginal.filter( movie => movie.id != id)
        this.setState ({
            movie: moviesDelete
        })

    }
        
    render() {
        let loading ;
        if (this.state.moviesOriginal.length== 0) {
            loading = <p> loading....</p>
            console.log("ESTO ES LOADING");
        } else {
            loading = <> { this.state.moviesOriginal.map(movie => <Card key={movie.id} movie={movie} delete={(movieDelete) => this.deleteCard(movieDelete)} />) } </>
        }
        
        return ( 
            <>
            <div>
             {loading}
                
            </div>
                <button onClick={() => this.add()}>Cargar más tarjetas</button>
            </>
        )
    }
}


export default Movies;