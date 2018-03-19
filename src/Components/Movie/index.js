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
