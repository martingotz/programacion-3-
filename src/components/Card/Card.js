import React   from 'react'
import Movies from '../Movies/Movies';

  function Card(props) {
      console.log(props);
   // const {title, overview, backdrop_path} = props.movieInfo
    
    
        return (
            <div>
                <main>
                    <button type="button">Cargar más tarjetas</button>
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
                                <img src="/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg" alt=""/>
                                <h3>e</h3>
                                <p className ="description">m</p>
                                <section className ="aditional-info">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                                </section>
                                <a href="">Ver más</a>
                               
                            </main>
                        </article>
                    </section>
                        </main>
                <main>
                <Movies/>
                  


              

                </main>

            </div>
        )
    }


export default Card;