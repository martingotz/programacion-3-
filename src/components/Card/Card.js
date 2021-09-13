import React   from 'react'


  function Card(props) {
      console.log(props.movie);
   const {title, overview, poster_path,id} = props.movie
    
    
        return (
            <div>
                <main>
                    <button onClick={() => this.add()}>Cargar más tarjetas</button>
                    <section className="card-container">
                        <article>
                            <section className="navigation">
                                <div>
                                    <i className="fas fa-chevron-left"></i>
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                                <i className="far fa-window-close"></i>
                            </section>
                            <main>
                                
                                <img src= {`https://image.tmdb.org/t/p/w342/${poster_path}`} alt=""/>

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