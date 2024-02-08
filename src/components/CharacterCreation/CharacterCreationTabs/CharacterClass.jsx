import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"



export default function CharacterClass() {
    const characterCreation = useSelector(store => store.createchars.setclass)
    // console.log('Create Character', characterCreation);

    const dispatch = useDispatch()
    let BtnRpt = (props) => {
        return (
            <button onClick = {(event) => {handleClick(event)}}>{props.name}</button>
        )
    }

let [yourClass, setYourClass] = useState('')


    const setClass =() => {
        dispatch({type:'SET_CLASS', payload:yourClass})
    }

    const handleClick = (event) => {
        setYourClass(event.target.closest('button').textContent)
    }
    return (
        <>
        <NavCharacter/>
        <>This is where you'll choose the Character Class</>
        <p>Your Class: {yourClass}</p>
        <button onClick = {setClass}>Confirm Your Class</button>
       <p><b>Pick your class</b></p> 
        <table>
      
            <tbody>
                <tr><td><BtnRpt name='Barbarian'/></td><td><BtnRpt name='Bard'/></td><td><BtnRpt name='Cleric'/></td></tr>
                <tr><td><BtnRpt name='Druid'/></td><td><BtnRpt name='Fighter'/></td><td><BtnRpt name='Monk'/></td></tr>
                <tr><td><BtnRpt name='Paladin'/></td><td><BtnRpt name='Ranger'/></td><td><BtnRpt name='Rogue'/></td></tr>
                <tr><td><BtnRpt name='Sorcerer'/></td><td><BtnRpt name='Warlock'/></td><td><BtnRpt name='Wizard'/></td></tr>
                
            </tbody>
        </table>

        <table>
    <thead>
        <tr>
            <th>Character</th>
            <th>Class</th>
            <th>Level</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sir Galahad</td>
            <td>Knight</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Lady Guinevere</td>
            <td>Princess</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Merlin</td>
            <td>Wizard</td>
            <td>12</td>
        </tr>
    </tbody>
</table>
        </>
    )
}