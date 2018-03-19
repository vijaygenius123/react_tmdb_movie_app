## Movie App

## Architecture

We wil have the following architecture 
 App.js -> MovieList -> Movie


### Movie Component
Create A Movie Component that will receive the movie object . Then movie object will contain details like title, poster language , overview and etc. The data is taken from the TMDb API.
```js
// .src/Components/Movie/index.js
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Movie = (props) => {
    const movie = props.movie;
    return(
    <div>
        <Card>
    <CardHeader title={movie.original_title} />
    <CardMedia>
    <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt={movie.original_title}/>
    </CardMedia>
    <CardTitle title={movie.original_title} subtitle={movie.original_language} />
    <CardText> {movie.overview} </CardText>
    </Card>
    </div>
    )
}

export default Movie;
```

### MovieList Component
Create A Movie List Component that will receive a prop called movie_list that will be a list of movie objects.

```js
// .src/Components/MovieList/index.js
import React from 'react';
import Movie from '../Movie'

class MovieList extends React.Component {

    render(){
        const movie_list = this.props.movie_list;
        console.log(movie_list);
        return(
            <div>
                {
                    movie_list.map((m)=>
                       <Movie movie={m} key={m.id}/>
                    )
                }
            </div>
        );
    }
}

export default MovieList;
```

### Addig It To App 
In App.js create a list of movies by copying the data from TMDb api and pass it into the MovieList component like so.]
```js
// .src/App.js
import MovieList from './Components/MovieList';  // Import the movie component we created in last step 

// Make a list of movie data from TMDB api
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

// In render() method call the component and pass the movies data into it
        <MovieList movie_list={movies} />
```
