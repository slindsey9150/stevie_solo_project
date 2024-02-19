import { useState } from "react"
import { useDispatch } from "react-redux"

export default function EditRace () {
    const dispatch = useDispatch()

    let [yourRace, setYourRace] = useState('')
    let [yourRaceId, setYourRaceId] = useState('')
    let [yourUrl, setYourUrl] = useState('')

    let BtnRpt = (props) => {
        return (
            <button className = 'BtnRpt' title = {props.url}id={props.raceId} onClick = {(event) => {handleClick(event)}}>{props.name}</button>
        )
    }

    const handleClick = (event) => {
        event.preventDefault()
        setYourRace(event.target.closest('button').textContent)
        setYourRaceId(event.target.closest('button').id)
        // setYourUrl(event.target.closest('button').title)
        let useRace = event.target.closest('button').title
        dispatch({type:'RULE_URL', payload:useRace})
        dispatch ({
            type: 'EDIT_ONCHANGE',
            payload: {property: 'race_id', value: (event.target.closest('button').id) }
        })


    }

    return (
        <table className="edit-race-table">
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
    )
}