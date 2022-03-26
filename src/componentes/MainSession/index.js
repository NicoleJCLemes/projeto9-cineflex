import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function MainSession(){

    const {movieID} = useParams();

    const [sessions, setSessions] = useState(null)
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then((response) => setSessions(response.data));
    },[])
    
    return sessions === null ? (
        <p className='loading'>loading...</p>
    ) : (
        <main className='main-session'>
            <h2>Selecione o horário</h2>
            <section>
                {(sessions.days).map((session) => 
                    {   
                        const {weekday, date, id, showtimes} = session
                        return (
                            <div key={id}>
                                <p>{weekday} - {date}</p>
                                <div className='time-options'>
                                    {showtimes.map((showtime) => {
                                        const {name, id} = showtime
                                        return <Link key={id} to={`/assentos/${id}`}><button>{name}</button></Link>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <footer>
                <img src={sessions.posterURL} alt="movie" />
                <p>{sessions.title}</p>
            </footer>
        </main>
    )
}