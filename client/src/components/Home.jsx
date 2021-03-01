import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div style={{backgroundImage: `url(https://user-images.githubusercontent.com/23629340/36983687-49a3d64e-2093-11e8-8b86-b11813f0cdba.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh'}}>
        <button onClick={this.callMyBackend}>Test Backend Call</button>
        <button>
          <Link to="./CheckMovies">Check Movies</Link>
        </button>
        <button>
          <Link to="./AddMovie">Add a Movie</Link>
        </button>

        <h1>Welcome to Express Cinema</h1>
      </div>
    );
  }
}
