import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "../MoviesPage";
import TimePage from "../TimePage";
import SeatsPage from "../SeatsPage";
import SuccessPage from "../SuccessPage";
import './reset.css'
import './style.css'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/filme/37" element={<TimePage />} />
                <Route path="/sessao/240" element={<SeatsPage />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}