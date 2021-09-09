import React, { Component } from 'react';
//import Card from '../Card/Card';
 class Movies extends Component {
     constructor(){
         super(

         )
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
           
           console.log('datos de la api');
           console.log(data);
           this.setState({
               moviesOriginal: data.results,// esto esta mal, cambiar cuando traiga ok la api.
               moviesFilter: data.results,
               nexturl: data.info.next, // Va con agregar mas 
           })


       })
       .catch (e=> console.log(e))
     };
     componentDidUpdate(){
         console.log("componentDidUpdate");
     }
    add (){
        const url = this.state.nexturl;
        fetch(url)
        .then((respuesta)=> respuesta.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                nexturl:data.info.next,
                personajes: this.state.personajes.concat(data.results),
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
        console.log("renderizado");
        return (
            <div>
                <p>Esto es movies </p>
                <button onClick={()=>this.add()} > Add More </button>
                <button onClick={()=>this.original()}>Limit</button>
            </div>
        )
    }
}


export default Movies;