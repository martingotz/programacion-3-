import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            viewMore: false,
            text:'Ver más',
            selected: false,

           
        }
    }
viewMore(){
        if (this.state.viewMore){
this.setState({
   viewMore: false,
   text: " Ver mas"
})
        }else{
            this.setState({
                viewMore : true,
                text : "Ver menos "

                
            })
        }
        
    }
    selected () {
        if (this.state.selected) {
            this.setState({
               selected: false,
            })
        }
        else {
            this.setState({
               selected: true ,

            })
        }
    }
    render() {
        return (
            <div className ={`container ${this.state.selected ? "active" : " "}`} onDoubleClick = {()=>this.selected()}>
            <main>
                <section className="card-container">
                    <article>
                        <section className="navigation">
                            <div>
                                <i className="fas fa-chevron-left"  > <img className="leftarrow" src={"/assets/img/left-arrow.png"}/>     </i>

                                <i className="fas fa-chevron-right"><img className="rightarrow" src={"/assets/img/right-arrow.png"}/> </i>
                                <i className="far fa-window-close"><img className="delete" src={"/assets/img/cruz.jpeg"}/>  </i>
                            </div>
                           
                        </section>
                        <main>
                            
                            <img className="img" src= {`https://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}`} alt=""/>

                            <h3>{this.props.movie.title}</h3>
                            <p className ="description">{this.props.movie.overview}</p>
                    
                
                            <section className ="aditional-info">
                            
                            </section>
                            {/*<a href="">Ver más</a>*/}
                            <p className = {`${ this.state.viewMore ? 'show': 'hide'}` }> Realese date: {this.props.movie.release_date} </p>
                            <p className = "more"  onClick= {()=>this.viewMore()}>  {this.state.text}  </p>
                            <button onClick={()=> this.props.delete(this.props.movie.id)}> Delete </button>
                           
                        </main>
                    </article>
                </section>
                    </main>
            

        </div>
        )
    }
}

/*
      console.log(props.movie);
   const {title, overview, poster_path,id} = props.movie */

   
    


export default Card;