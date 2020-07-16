import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
    handleDetailsClick = film => {
        console.log(`Fetching details for ${film.title} 🧠`)
    }


    render() {
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <FilmPoster film={this.props.film}/>

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FilmRow;