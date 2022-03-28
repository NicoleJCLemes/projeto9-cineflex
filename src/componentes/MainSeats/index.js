import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seat from './Seat';
import './style.css'

export default function SeatsPage(){

    const {sessionID} = useParams();
    const [seats, setSeats] = useState(null);
    const [saveSelectedSeats, setSaveSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`);
        promise.then((response) => setSeats(response.data));
    },[])

    function sendData(){
        const data = {
            ids: saveSelectedSeats,
            name: name,
            cpf: cpf
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", data);
        promise.then(() => {
            navigate('/sucesso', {state:{
                title: seats.movie.title,
                weekday: seats.day.weekday,
                time: seats.name,
                chosenSeats: seats.seats.name,
                personName: name,
                personCpf: cpf
            }})
        });

        
    }

    return seats === null ? (
        <p className='loading'>loading...</p>
    ) : (
        <main className='main-seats'>
            <h2>Selecione o(s) assento(s)</h2>
            <section>
                <div className='seats'>
                    {(seats.seats).map((seat) => 
                    { return <Seat saveSelectedSeats={saveSelectedSeats} setSaveSelectedSeats={setSaveSelectedSeats} key={seat.id} id={seat.id} name={seat.name} isAvailable={seat.isAvailable} />})}
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
                <form>
                    <p>Nome do comprador:</p>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Digite seu nome...' required />
                    <p>CPF do comprador:</p>
                    <input onChange={(e) => setCpf(e.target.value)} type="number" placeholder='Digite seu CPF...' required />
                    <Link to="/sucesso"><button type="submit" onClick={sendData}>Reservar assento(s)</button></Link>
                </form>
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