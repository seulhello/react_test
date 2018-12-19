import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi() {
    const ystUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=df222d9e67be8c8e4cab2f25b8c1f5c9&language=ko&sort_by=popularity.desc&include_adult=true';
    return fetch(ystUrl)
      .then(response => response.json())
      .then(json => json.results)
      .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const linkUrl = "https://image.tmdb.org/t/p/w500/"
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie title={movie.title} poster={`${linkUrl}` + movie.poster_path} key={movie.id} />
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
