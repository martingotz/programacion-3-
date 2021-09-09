import React, { Component } from 'react'
import Movies from '../Movies/Movies';

class Card extends Component {
    render() {
        return (
            <div>

                <section className="navigation">
                    <div>
                        <p>Esto es Card </p>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
                <main>
                <Movies/>
              

                </main>

            </div>
        )
    }
}

export default Card;