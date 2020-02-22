//afficher les beers puis Random Beer puis New Beer

import React, { Component } from "react";
import { Link } from "react-router-dom";


class Homepage extends Component {
    render() {
      return (
        <div className="Homepage">
            <div className="Beers">
              <Link to="/beers" className="Beers">
              <img class="Allbeers"
              src="/img/beers.png"
              alt=""></img>
              All Beers
              </Link>
            </div>
            <div className="RandomBeer">
              <Link to="/random" className="Randombeer">
              <img class="Allbeers"
              src="/img/random-beer.png"
              alt=""></img>
              Random Beer
              </Link>
            </div>
            <div className="NewBeer">
              <Link to="/new" className="Newbeer">
              <img class="Allbeers"
              src="/img/new-beer.png"
              alt=""></img>
              New Beer
              </Link>
            </div>
        </div>
);
}
}

export default Homepage;