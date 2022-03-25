import Movie from './Movie'

import './style.css'

export default function MainMovies(){
    return (
        <main className='main-movies'>
            <h2>Selecione o filme</h2>
            <section>
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </section>
        </main>
    )
}