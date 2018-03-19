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