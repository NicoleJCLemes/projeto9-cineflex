import { useState } from 'react';
import './style.css';
export default function Seat(props){

    const {id, name, isAvailable, setSaveSelectedSeats, saveSelectedSeats} = props
    const [selected, setSelected] = useState('seat available')

    function selectSeat(){
        if(selected === 'seat available'){
            setSelected('seat selected')
            setSaveSelectedSeats([...saveSelectedSeats, id])
        } else if (selected === 'seat selected'){
            setSelected('seat available')
            const index = saveSelectedSeats.indexOf(`${id}`)
            saveSelectedSeats.splice(index, 1)
        }
        console.log(saveSelectedSeats)
    }

    return isAvailable === false ? (
        <div onClick={() => alert("Ih, já escolheram esse!")} key={id} className={'seat unavailable'}>{name}</div>
    ) : (
        <div onClick={selectSeat} key={id} className={selected}>{name}</div>
    )
}