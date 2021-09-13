import React   from 'react'
import './Card.css'


  function Card(props) {
      console.log(props.movie);
   const {title, overview, poster_path,id} = props.movie
    
    
        return (
            <div className="container">
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
                                
                                <img className="img" src= {`https://image.tmdb.org/t/p/w342/${poster_path}`} alt=""/>

                                <h3>{title}</h3>
                                <p className ="description">{overview}</p>
                        
                    
                                <section className ="aditional-info">
                                
                                </section>
                                <a href="">Ver más</a>
                                <button onClick={()=> this.props.delete(id)}> Delete </button>
                               
                            </main>
                        </article>
                    </section>
                        </main>
                

            </div>
        )
    }


export default Card;