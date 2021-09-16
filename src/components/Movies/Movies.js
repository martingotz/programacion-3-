import React, { Component } from 'react';
import Card from '../Card/Card';
import './Movie.css'

 class Movies extends Component {
     constructor(props){
         super(props)
         this.state ={ 
            moviesOriginal: [],
            moviesFilter:[],
            nexturl:"",
            nextpage: 1,
            
         }
     }
     componentDidMount(){
         console.log("Component did mount");
         const url = `https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=${this.state.nextpage}`
         fetch(url)
         
         .then((respuesta)=>respuesta.json()) 
       .then((data)=> {
           console.log(data);
           this.setState({
               moviesOriginal: data.results,
               moviesFilter: data.results,
               movie: data.results,
               nextpage: data.page +1, // Va con agregar mas 

           })


       })
       .catch (e=> console.log(e))
     };
     componentDidUpdate(){
         console.log("componentDidUpdate");
     }
     /*add (){
        const url= this.state.nexturl
        
         fetch(url)
             .then((respuesta) => respuesta.json())
             .then((data) => {
                 this.setState({
                     nexturl: 'https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=1'

                 })
                   })
     }
     */
    
     add (){
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=${this.state.nextpage}`;
        console.log(url);
        
        fetch(url)

        .then((respuesta)=> respuesta.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                nextpage: data.page +1,
               addMovies: this.state.moviesOriginal.concat(data.results),
            });
        })
        
        .catch((e)=> console.log(e))
    }
   
    
    deleteCard(id){
        console.log(id);
        const moviesDelete = this.state.movie.filter( movie => movie.id != id)
        console.log(moviesDelete);
        console.log(this.state.movie);
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
            loading = <> { this.state.movie.map(movie => <Card key={movie.id} movie={movie} delete={(movieDelete) => this.deleteCard(movieDelete)} />) } </>
        }
        
        return ( 
            <>
            <button onClick={() => this.add()}>Cargar más tarjetas</button>
            <div className="movieContainer">
             {loading}
             
            </div>
                
            </>
        )
    }
}


export default Movies;