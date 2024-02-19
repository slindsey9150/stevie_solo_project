import { useState
 } from "react";
 import { useDispatch } from "react-redux";

export default function EditAlignment () {

    const dispatch = useDispatch()
    let [yourAllign, setYourAllign] = useState('')


    const handleAllign = (event) => {
        console.log('clicking an allignment', event.target.closest('button').id);
        let allignUrl = event.target.closest('button').id
        dispatch({type:'RULE_URL', payload: allignUrl})
        setYourAllign(event.target.closest('button').textContent)
        dispatch ({
            type: 'EDIT_ONCHANGE',
            payload: {property: 'alignment', value: (event.target.closest('button').textContent) }
        })
    }
    return (
        <table className="edit-alignment-table">
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
    )
}