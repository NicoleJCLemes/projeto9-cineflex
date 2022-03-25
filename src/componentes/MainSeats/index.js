import { Link } from 'react-router-dom'
import './style.css'

export default function SeatsPage(){
    return(
        <main className='main-seats'>
            <h2>Selecione o(s) assento(s)</h2>
            <section>
                <div className='seats'>
                    <div className='seat'>01</div>
                    <div className='seat'>02</div>
                    <div className='seat'>03</div>
                    <div className='seat'>04</div>
                    <div className='seat'>01</div>
                    <div className='seat'>02</div>
                    <div className='seat'>03</div>
                    <div className='seat'>04</div>
                    <div className='seat'>01</div>
                    <div className='seat'>02</div>
                    <div className='seat'>03</div>
                    <div className='seat'>04</div>
                </div>
                <div className='subtitle'>
                    <div className='selected'>
                        <div className='seat'></div>
                        <p>Selecionado</p>
                    </div>
                    <div className='available'>
                        <div className='seat'></div>
                        <p>Disponível</p>
                    </div>
                    <div className='unavailable'>
                        <div className='seat'></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <p>Nome do comprador:</p>
                <input placeholder='Digite seu nome...'></input>
                <p>CPF do comprador:</p>
                <input placeholder='Digite seu CPF...'></input>
                <Link to="/sucesso"><button>Reservar assento(s)</button></Link>
            </section>
        </main>
    )
}