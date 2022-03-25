import { Link } from "react-router-dom";
import './style.css'

export default function Movie(){
    return(
        <Link to="/sessoes/:movieID">
            <figure className='movie-choice'>
                    <img src="https://image.tmdb.org/t/p/w220_and_h330_face/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg" alt="movie on display" />
            </figure>
        </Link>
    )
}