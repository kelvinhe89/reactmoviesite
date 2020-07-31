import { Breakpoint } from 'react-socks';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// import './MovieList.scss';

class Movie extends Component{

   render(){
      let name = this.props.location.state

    return (
  <>
    <Breakpoint medium up>
      <div className="movie-component">
        
        <div className="movie-details">
          <h1 className="movie-title">{name.name}</h1>
          <p className="movie-overview">
            <strong>Synopsis:</strong> {name.synopsis}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {name.productionYear}
          </p>
        </div>
      </div>
    </Breakpoint>
    <Breakpoint small down>
      <div className="movie-component-mobile">
        <h1 className="movie-title">{name.name}</h1>
        
        <div className="movie-details">
          <p className="movie-overview">
            <strong>Synopsis:</strong> {name.synopsis}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {name.productionYear}
          </p>
        </div>
      </div>
    </Breakpoint>
  </>
   )
}
}

export default withRouter(Movie);