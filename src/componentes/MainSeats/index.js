import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

export default function SeatsPage(){

    const {sessionID} = useParams();
    const [seats, setSeats] = useState(null)
    //const [selected, setSelected] = useState('seat available')
    let newClass
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promise.then((response) => setSeats(response.data));
    },[])

    return seats === null ? (
        <p className='loading'>loading...</p>
    ) : (
        <main className='main-seats'>
            <h2>Selecione o(s) assento(s)</h2>
            <section>
                <div className='seats'>
                    {(seats.seats).map((seat) => {
                        seat.isAvailable === false ? newClass = 'seat unavailable' : newClass = 'seat available'
                        //if(seat.isAvailable === false){setSelected('seat unavailable')}
                        //return <div onClick={() => {if(seat.isAvailable === false){alert('indisponivel')} else {setSelected('seat selected')}}} key={seat.id} className={selected}>{seat.name}</div>
                        return <div onClick={() => {if(seat.isAvailable === false){alert('indisponivel')} else {newClass = 'seat selected'}}} key={seat.id} className={newClass}>{seat.name}</div>
                    })}
                </div>
                <div className='subtitle'>
                    <div>
                        <div className='seat selected'></div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className='seat available'></div>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <div className='seat unavailable'></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <p>Nome do comprador:</p>
                <input type="text" placeholder='Digite seu nome...'></input>
                <p>CPF do comprador:</p>
                <input type="text" placeholder='Digite seu CPF...'></input>
                <Link to="/sucesso"><button>Reservar assento(s)</button></Link>
            </section>
            <footer>
                <img src={seats.movie.posterURL} alt="movie" />
                <div>
                    <p>{seats.movie.title}</p>
                    <p>{seats.day.weekday} - {seats.name}</p>
                </div>
            </footer>
        </main>
    )
}