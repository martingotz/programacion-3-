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
                                <i className="far fa-window-close" onClick={()=> this.props.delete(this.props.movie.id)}><img className="delete" src={"/assets/img/favicon-32x32.png"}/>  </i>
                            </div>
                           
                        </section>
                        <main>
                            
                            <img className="img" src= {`https://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}`} alt=""/>

                            <h3>{this.props.movie.title}</h3>
                            <p className ="description">{this.props.movie.overview}</p>
                    
                
                            <section className ="aditional-info">
                            
                            </section>
                           
                            <p className = {`${ this.state.viewMore ? 'show': 'hide'}` }> Realese date: {this.props.movie.release_date} <br /> Vote Average:{this.props.movie.vote_average} <br /> Popularity: {this.props.movie.popularity} <br />  </p>
                            <p className = "more"  onClick= {()=>this.viewMore()}>  {this.state.text}  </p>
                           
                        </main>
                    </article>
                </section>
                    </main>
            

        </div>
        )
    }
}

    


export default Card;