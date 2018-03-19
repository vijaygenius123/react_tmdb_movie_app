import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';

const movies = [
  {"vote_count": 900,
"id": 337167,
"video": false,
"vote_average": 6.2,
"title": "Fifty Shades Freed",
"popularity": 525.701922,
"poster_path": "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
"original_language": "en",
"original_title": "Fifty Shades Freed",
"genre_ids": [
18,
10749
],
"backdrop_path": "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
"adult": false,
"overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
"release_date": "2018-02-07"
},
{
"vote_count": 6540,
"id": 269149,
"video": false,
"vote_average": 7.7,
"title": "Zootopia",
"popularity": 380.23527,
"poster_path": "/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
"original_language": "en",
"original_title": "Zootopia",
"genre_ids": [
16,
12,
10751,
35
],
"backdrop_path": "/mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg",
"adult": false,
"overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
"release_date": "2016-02-11"
},
]
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie App</h1>
        </header>
        <MovieList movie_list={movies} />
      </div>
    );
  }
}

export default App;
