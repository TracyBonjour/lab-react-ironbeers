//Sigle Beer

import React, { Component } from "react";
import axios from 'axios';
import Header from './Header';


class Singlebeer extends Component {
    state = { Beer: {} }

    getBeer = () =>{

        axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
          .then(responseFromApi => {
            console.log('coucou:',responseFromApi.data)
            this.setState({Beer: responseFromApi.data})
          })
          .catch(err => console.log('Error', err))
      }
    componentDidMount() {
        this.getBeer();
    }

    render() {
        
      return (
        <div className="Beer">
        <Header/>
        <div className="Beer">
            <div>
                  <img class="Beers"
                    src={this.state.Beer.image_url}
                    alt=""></img>
                    <h1>{this.state.Beer.name}</h1>
                    <h2>{this.state.Beer.tagline}</h2>
                    <h3>{this.state.Beer.first_brewed}</h3>
                    <h3>{this.state.Beer.attenuation_level}</h3>
                    <p>{this.state.Beer.description}</p>
                    <p>{this.state.Beer.contributed_by}</p>
            </div>
        </div>
      </div>
);
}
}

export default Singlebeer;


