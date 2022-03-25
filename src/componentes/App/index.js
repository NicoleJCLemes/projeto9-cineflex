import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMovies from "../MainMovies";
import MainSession from "../MainSession";
import MainSeats from "../MainSeats";
import SuccessPage from "../SuccessPage";
import Header from "../Header";
import './reset.css'
import './style.css'

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainMovies />} />
                <Route path="/sessoes/:movieID" element={<MainSession />} />
                <Route path="/assentos/:sessionID" element={<MainSeats />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}