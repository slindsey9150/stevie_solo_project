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
            <button className = 'BtnRpt'onClick = {(event) => {handleClick(event)}}>{props.name}</button>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="yourClass">Your Class: {yourClass} <button className='ConfButton'onClick = {setClass}>Confirm Your Class</button></p>
        
     
      <br></br>
      <br></br>
      <br></br>
        <table>
            <thead>
                    <tr>
                    <th colSpan='3' className='oneHead'>Choose Your Class</th>
                    </tr>
                   
            
                
            </thead>
      
            <tbody>
                <tr><td><BtnRpt name='Barbarian'/></td><td><BtnRpt name='Bard'/></td><td><BtnRpt name='Cleric'/></td></tr>
                <tr><td><BtnRpt name='Druid'/></td><td><BtnRpt name='Fighter'/></td><td><BtnRpt name='Monk'/></td></tr>
                <tr><td><BtnRpt name='Paladin'/></td><td><BtnRpt name='Ranger'/></td><td><BtnRpt name='Rogue'/></td></tr>
                <tr><td><BtnRpt name='Sorcerer'/></td><td><BtnRpt name='Warlock'/></td><td><BtnRpt name='Wizard'/></td></tr>
                
            </tbody>
        </table>

        </>
    )
}