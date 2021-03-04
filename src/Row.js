import React, {useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css"

const imageUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, sizing}){
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const quest = await axios.get(fetchUrl);
            setMovies(quest.data.results);
            return quest;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className={`rowPoster ${sizing && "rowPosterLarge"}`}>
                {movies.map(movie => (
                    <img className="poster"
                    key={movie.id} 
                    src={`${imageUrl}${sizing ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))} 
            </div>
        </div>
    )
}

export default Row;