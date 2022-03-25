import { Link } from 'react-router-dom';
import './style.css';

export default function MainSession(){
    return(
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
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg" alt="movie" />
                <p>Nome do filme</p>
            </footer>
        </main>
    )
}