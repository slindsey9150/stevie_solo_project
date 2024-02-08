import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function CharacterRace() {
    const characterCreation = useSelector(store => store.createchars.setrace)
    let [yourRace, setYourRace] = useState('')
    const dispatch = useDispatch()
    let BtnRpt = (props) => {
        return (
            <button onClick = {(event) => {handleClick(event)}}>{props.name}</button>
        )
    }
    const setRace = () => {
        dispatch({type:'SET_RACE', payload:yourRace})
    }
   
   

    const handleClick = (event) => {
        event.preventDefault()
        setYourRace(event.target.closest('button').textContent)
    }
    return (
        <>
        <NavCharacter/>
        <>This is where you'll choose the Character Race</>
        <p>Your race: {yourRace}</p> <button onClick = {setRace}>Confirm your Race</button>
       <p><b>Pick your race</b></p> 
        <table>
      
            <tbody>
                <tr><td><BtnRpt name='Dragonborn'/></td><td><BtnRpt name='Dwarf'/></td><td><BtnRpt name='Elf'/></td></tr>
                <tr><td><BtnRpt name='Gnome'/></td><td><BtnRpt name='Half-Elf'/></td><td><BtnRpt name='Half-Orc'/></td></tr>
                <tr><td><BtnRpt name='Halfling'/></td><td><BtnRpt name='Human'/></td><td><BtnRpt name='Tiefling'/></td></tr>
                
            </tbody>
        </table>
        </>
        )
}