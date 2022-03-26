import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import './style.css'

export default function MainMovies(){

    const [movies, setMovies] = useState(null)
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => setMovies(response.data))
    },[])


    return movies === null ? (
        <p>loading...</p>
    ) : (
        <main className='main-movies'>
            <h2>Selecione o filme</h2>
            <section>
                {
                    movies.map((movie) => {
                        const {posterURL, id} = movie
                        return (
                            <Link key={id} to={`/sessoes/${id}`}>
                                <figure className='movie-choice'>
                                    <img src={posterURL} alt="movie on display" />
                                </figure>
                            </Link>
                        )
                    })
                }
            </section>
        </main>
    )
}