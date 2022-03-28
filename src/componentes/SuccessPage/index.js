import { Link, useLocation } from 'react-router-dom';
import './style.css'

export default function SuccessPage(){

    const {state} = useLocation();
    console.log(state)

    return(
        <main className='main-success'>
            <h2>Pedido feito <br /> com sucesso!</h2>
            <section>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>{state.title}</p>
                    <p>{state.weekday} {state.time}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>Nome: {state.personName}</p>
                    <p>CPF: {state.personCpf}</p>
                </div>
                <Link to="/"><button>Voltar pra Home</button></Link>
            </section>
        </main>
    )
}