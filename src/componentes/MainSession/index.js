import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

export default function MainSession(){

    const {movieID} = useParams();

    const [sessions, setSessions] = useState(null)
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then((response) => setSessions(response.data))
    },[])

    return sessions === null ? (
        <p>loading...</p>
    ) : (
        <main className='main-session'>
            <h2>Selecione o horário</h2>
            <section>
                <div>
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className='time-options'>
                        <Link to="/assentos/:sessionID"><button>15:00</button></Link>
                        <Link to="/assentos/:sessionID"><button>19:00</button></Link>
                    </div>
                </div>
                <div>
                    <p>Sexta-feira - 25/06/2021</p>
                    <div className='time-options'>
                        <Link to="/assentos/:sessionID"><button>15:00</button></Link>
                        <Link to="/assentos/:sessionID"><button>19:00</button></Link>
                    </div>
                </div>
            </section>
            <footer>
                <img src={sessions.posterURL} alt="movie" />
                <p>{sessions.title}</p>
            </footer>
        </main>
    )
}