import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import SingleRule from "../../AllRules/SingleRule/SingleRule"
import logger from "redux-logger"

export default function CharacterRace() {
    const characterCreation = useSelector(store => store.createchars.setrace)
    let [yourRace, setYourRace] = useState('')
    let [yourRaceId, setYourRaceId] = useState('')
    let [yourUrl, setYourUrl] = useState('')
    const dispatch = useDispatch()
    let BtnRpt = (props) => {
        return (
            <button title = {props.url}id={props.raceId} onClick = {(event) => {handleClick(event)}}>{props.name}</button>
        )
    }
    const setRace = () => {
        dispatch({type:'SET_RACE', payload:yourRace})
        dispatch({type:'SET_RACE_ID', payload:yourRaceId})

    }
   
   

    const handleClick = (event) => {
        event.preventDefault()
        setYourRace(event.target.closest('button').textContent)
        setYourRaceId(event.target.closest('button').id)
        setYourUrl(event.target.closest('button').title)
        dispatch({type:'RULE_URL', payload:yourUrl})


    }
    return (
        <>
        <NavCharacter/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="yourClass">Your Race: {yourRace} <button className='ConfButton'onClick = {setRace}>Confirm your Race</button></p> 
       <br/><br/><br/>
        <table>
            <thead>
                    <tr>
                    <th colSpan='3' className='oneHead'>Choose Your Race</th>
                    </tr>
                   
            
                
            </thead>
      
            <tbody>
                <tr><td><BtnRpt url = '/api/races/dragonborn' raceId='8' name='Dragonborn'/></td><td><BtnRpt url = '/api/races/dwarf'  raceId='3' name='Dwarf'/></td><td><BtnRpt url = '/api/races/elf' raceId='2' name='Elf'/></td></tr>
                <tr><td><BtnRpt url = '/api/races/gnome' raceId='6' name='Gnome'/></td><td><BtnRpt url = '/api/races/half-elf' raceId='9' name='Half-Elf'/></td><td><BtnRpt url = '/api/races/half-orc' raceId='5' name='Half-Orc'/></td></tr>
                <tr><td><BtnRpt url = '/api/races/halfling' raceId='7' name='Halfling'/></td><td><BtnRpt url = '/api/races/human' raceId='1' name='Human'/></td><td><BtnRpt url = '/api/races/tiefling' raceId='4' name='Tiefling'/></td></tr>
                
            </tbody>
        </table>
        <SingleRule/>
        </>
        )
}