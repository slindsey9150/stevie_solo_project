import NavCharacter from "../../NavCharacter/NavCharacter"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import logger from "redux-logger"
import SingleRule from "../../AllRules/SingleRule/SingleRule"
export default function CreateCharacter () {
    const nameStore = useSelector(store => store.createchars.setName)
    const levelStore = useSelector(store => store.createchars.setLevel)
    const [useName, setUseName] = useState('')
    const dispatch = useDispatch()
    let [yourAllign, setYourAllign] = useState('')
    let [yourUrl, setYourUrl] = useState('')
    const nameSubmit = () => {


        console.log('name submitted', useName);
        dispatch({type:'SET_NAME', payload:useName})
        setUseName('')


    }

    const handleClick = (event) => {
        event.preventDefault()
        nameSubmit()
    }

    const handleAllign = (event) => {
        console.log('clicking an allignment', event.target.closest('button').id);
        let allignUrl = event.target.closest('button').id
        dispatch({type:'RULE_URL', payload: allignUrl})
        setYourAllign(event.target.closest('button').textContent)
    }
    const setAlign = () => {
        dispatch({type:'SET_ALIGN', payload: yourAllign})
        console.log('setting alignment');
    }

    return (
        <>
        <NavCharacter/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        {/* <>This is where you'll Create a Character</> */}
        
        <form 
        className='name-picker'
        onSubmit = {handleClick}>
        <input value={useName} placeholder='name' type='text' onChange={(event) => setUseName(event.target.value)}/>
        <button>Submit name</button>
        </form>
        <br/>
        <br/>
        <br/>
        <p className="yourAlignment">Your Allignment: {yourAllign} <button className='ConfButton' onClick={setAlign}>Confirm Your Allignment</button></p>

       
        <table className="alignment-table">
            <thead>
                <tr>
                    <th colSpan = '3'> Choose Your Allignment Here</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/chaotic-evil'>Chaotic Evil</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/chaotic-good'>Chaotic Good</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/chaotic-neutral'> Chaotic Neutral</button></td></tr>
                <tr><td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/lawful-evil'>Lawful Evil</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/lawful-good'>Lawful Good</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/lawful-neutral'>Lawful Neutral</button></td></tr>
                <tr><td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/neutral'>Neutral</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/neutral-evil'>Neutral Evil</button></td>
                <td><button className = 'BtnRpt' onClick={(event) => handleAllign(event)} id='/api/alignments/neutral-good'>Neutral Good</button></td></tr>
            </tbody>
        </table>
        <SingleRule/>
        </>
    )
}