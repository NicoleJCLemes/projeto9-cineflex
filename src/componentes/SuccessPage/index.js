import { Link } from 'react-router-dom';
import './style.css'

export default function SuccessPage(){
    return(
        <main className='main-success'>
            <h2>Pedido feito <br /> com sucesso!</h2>
            <section>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </div>
                <Link to="/"><button>Voltar pra Home</button></Link>
            </section>
        </main>
    )
}