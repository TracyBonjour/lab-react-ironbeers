//List the beers

import React, { Component } from "react";
import { Link } from "react-router-dom";
//Link important pour recuperer l id de la biere dans siglebeer
import axios from 'axios';
import Header from './Header';



class Beers extends Component {
    state = { listBeers: [] }

    getAllBeers = () =>{
        axios.get(`https://ih-beer-api.herokuapp.com/beers`)
          .then(responseFromApi => {
            console.log('coucou:',responseFromApi.data)
            this.setState({listBeers: responseFromApi.data})
          })
          .catch(err => console.log('Error', err))
      }
    componentDidMount() {
        this.getAllBeers();
    }

    render() {
        
      return (
        <div className="Beers">
        <Header/>
        <div className="Beers">
          { this.state.listBeers.map( beer => {
            return (
              <div key={beer._id}>
                
                <Link to={`/beers/${beer._id}`}>
                  <h1>{beer.name}</h1>
                </Link>
                  <img class="Beers"
                    src={beer.image_url}
                    alt=""></img>
                    <h2>{beer.tagline}</h2>
                    <h3>Created by:{beer.contributed_by}</h3>
              </div>
            )})
          }
        </div>
      </div>
);
}
}

export default Beers;

