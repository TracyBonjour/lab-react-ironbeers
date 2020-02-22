//Création d'une nouvelle beer

import React, { Component } from "react";

//Link important pour recuperer l id de la biere dans siglebeer
import axios from 'axios';
import Header from './Header';



class Newbeer extends Component {

    state = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" }
   
    handleFormSubmit = (event) => {
      event.preventDefault();

      const name = this.state.name;
      const tagline = this.state.tagline;
      const description = this.state.description;
      const first_brewed = this.state.first_brewed;
      const brewers_tips = this.state.brewers_tips;
      
      axios.post("https://ih-beer-api.herokuapp.com/beers/new", { title, description })
        .then(() => {
            // this.props.getData();
            
            // Reset form
            this.setState({title: "", description: ""});
        })
        .catch(error => console.log(error))
    }
  
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
  
    render(){
      return(
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

export default Newbeer;
