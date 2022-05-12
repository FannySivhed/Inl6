import React, { useState, useRef} from 'react';
import Movie from './movie';
import { Button, Form } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function MovieList() {
    const titleRef = useRef();
    const ratingRef = useRef();
    const [movies, setMovies] = useState([])

    function addMovie(event, rating) {
        event.preventDefault();
        if (event.keyCode === 13){ 
            if ((titleRef.current.value == "") || (ratingRef.current.value == "")){
                alert("Fyll i båda textrutorna");
            } else {
                const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
                setMovies([...movies, {
                    id: newId,
                    title: titleRef.current.value,
                    rating: ratingRef.current.value,
            }])
            titleRef.current.value="";
            ratingRef.current.value="";
            }   
        }
    }

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    function alfa(props) {
        setMovies(props.movies)
        const sortedAlfa = [...movies,].sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        setMovies(sortedAlfa)
    }

    function grade(props) {
        setMovies(props.movies)
        const sortedRating = [...movies,].sort((a,b) => {
            return a.rating < b.rating ? 1 : -1
       })
        setMovies(sortedRating)
    }

    return (
        <div>
            <h2>Titel:</h2>
            <input className="form-control" ref={titleRef} placeholder="Ange titel här..." onKeyUp={addMovie} />
            <h2>Betyg:</h2>
            <Form.Select id="dropdown-basic-button" title="Rating" ref={ratingRef} className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Select>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}
            </ul>
            <Button variant="success" onClick={alfa} >Alfabetisk ordning</Button>{' '}
            <Button variant="success" onClick={grade}>Betygsordning</Button>{' '}
        </div>
    )  
}