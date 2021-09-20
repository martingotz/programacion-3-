import React, { Component } from 'react';
import Card from '../Card/Card';
import './Movie.css'

 class Movies extends Component {
     constructor(props){
         super(props)
         this.state ={ 
            moviesOriginal: [],
            nextpage: 1,
            valor: '',
            view: "rowMovie",
            moviesFilter: []
         }


    
     }
     componentDidMount(){
         console.log("Component did mount");
         const url = `https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=1`
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
    
     
     add (){
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=4376257ca33773b58ce7e3a2ca8c1180&language=en-US&page=${this.state.nextpage}`;
        //javascript, template literals(valores de javascript)
        console.log(url);
        
        fetch(url)

        .then((respuesta)=> respuesta.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                nextpage: data.page +1,
               moviesFilter: this.state.moviesFilter.concat(data.results),
            });
        })
        
        .catch((e)=> console.log(e))
    }
   
    
    deleteCard(id){
        console.log(id);
        const moviesDelete = this.state.moviesFilter.filter( movie => movie.id != id)
        console.log(moviesDelete);
        console.log(this.state.movie);
        this.setState ({
            moviesFilter: moviesDelete
        })

    }
   
    evitarSubmit (event){
        event.preventDefault()
    }
    controlarCambios(event){
       
        console.log(this.state.valor);
        this.setState({
            valor: event.target.value,
            

        }, ()=> this.filterMovie(this.state.valor) )
    }


    //metodo que describe que queremos que pase cuando sucede el evento. 
// yo defino las consecuencias, que quiero que suceda cuando suceden los eventos. ahora como los asocio a lugares concretos de nuestro html? bueno, en el lugar donde quiiero que suceda pongo el evento

    rowMovie(){
        this.setState({
            view:"rowMovie"
        })
    }
    columnMovie(){
        this.setState({
            view:"columnMovie"
        })
    }
filterMovie(filterText){
    let filterMovies = this.state.moviesFilter.filter( (movie) => movie.title.toLowerCase().includes(filterText.toLowerCase()))
    this.setState({
        moviesFilter: filterMovies,
    })
}

 


    render() {
        let loading ;
        if (this.state.moviesOriginal.length== 0) {
            loading = <p> loading....</p>
            console.log("ESTO ES LOADING"); 
        } else {
            loading = <> 
            { this.state.moviesFilter.map(movie => <Card key={movie.id} movie={movie} delete={(movieDelete) => this.deleteCard(movieDelete)} view={this.state.view} />) } </>
        }
        
        return ( 
            <div >

                                {/* // aca pongo el evento que es el lugar donde quiero que suceda. pongo el evento onClcik, a cada uno le adisiono js por eso le ponemos la llave.  noterse que los eventos llevan camelcase, en mayuscula cada palabra
                // podemos poner una funcion y definirlo 
                //ponemos el nombre del metodo colunMovie con los parentesis porque queres qeu se ejecute en el momento  */}

            <button onClick ={()=>this.columnMovie()}   ><img className="logoIgual" src={"/assets/img/menu2.jpeg"}/> {()=>this.columnMovie()}</button>

            <button  onClick={()=>this.rowMovie()}><img className="logoIgual" src={"/assets/img/menu.jpeg"}/>  {()=>this.rowMovie()}</button>





                  <form  onSubmit={(event)=> this.evitarSubmit(event)} action="">
                <input type="text" onChange={(event)=> this.controlarCambios(event) } value={this.state.valor} filterMovies={(param)=> this.filterMovie(param)} name="search" id="" placeholder="Search" />
                    <button type="submit">Enviar<i className="fas fa-search"></i> </button>
                </form>



            <button onClick={() => this.add()}>Cargar más tarjetas</button> 
            <div className={`${this.state.view ==   "rowMovie" ? 'rowMovie' : 'columnMovie'}`} >
             {loading}
             
            </div>
                
             </div>
        )
    }
}


export default Movies;