import BtnRpt from "../BtnRptTwo/BtnRptTwo"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function EditClass (props) {
        const dispatch = useDispatch()

        let [yourClass, setYourClass] = useState('')
        let [yourUrl, setYourUrl] = useState('')
        let [yourClassId, setYourClassId] = useState('')

    const handleClick = (event) => {
       
        setYourClass(event.target.closest('button').textContent)
        setYourClassId(event.target.closest('button').title)
        // setYourUrl(event.target.closest('button').id)
        let useUrl = event.target.closest('button').id
        console.log('your url', yourUrl);
        // console.log('Class Level', classLevel);
        dispatch({type:'RULE_URL', payload:useUrl})
        dispatch ({
            type: 'EDIT_ONCHANGE',
            payload: {property: 'class_id', value: (event.target.closest('button').title) }
        })


        // if (characterLevel == '') {
        //     sendLevel = 1
        // }
        // else {
        //     sendLevel = characterLevel
        // }
        // dispatch({type:'SET_CHAR_LEVEL', payload: sendLevel, classurl: yourUrl})
        // dispatch({type:'SET_LEVEL', payload: sendLevel})
    }

    return (
        <table className="edit-class-table">
        <thead>
                <tr>
                <th colSpan='3' className='oneHead'>Choose Your Class</th>
                </tr>
               
        
            
        </thead>
  
        <tbody>
            <tr><td><BtnRpt classId= '2'  btnEvent= {handleClick} url ='/api/classes/barbarian' name='Barbarian'/></td><td><BtnRpt classId= '1' btnEvent= {handleClick} url ='/api/classes/bard' name='Bard'/></td><td><BtnRpt classId= '3' btnEvent= {handleClick} url ='/api/classes/cleric' name='Cleric'/></td></tr>
            <tr><td><BtnRpt classId= '4' btnEvent= {handleClick} url ='/api/classes/druid' name='Druid'/></td><td><BtnRpt classId= '5' btnEvent= {handleClick} url ='/api/classes/fighter' name='Fighter'/></td><td><BtnRpt classId= '6' btnEvent= {handleClick} url ='/api/classes/monk' name='Monk'/></td></tr>
            <tr><td><BtnRpt classId= '7' btnEvent= {handleClick} url ='/api/classes/paladin' name='Paladin'/></td><td><BtnRpt classId= '8' btnEvent= {handleClick} url ='/api/classes/ranger' name='Ranger'/></td><td><BtnRpt classId= '9' btnEvent= {handleClick} url ='/api/classes/rogue' name='Rogue'/></td></tr>
            <tr><td><BtnRpt classId= '10' btnEvent= {handleClick} url ='/api/classes/sorcerer' name='Sorcerer'/></td><td><BtnRpt classId= '11' btnEvent= {handleClick} url ='/api/classes/warlock' name='Warlock'/></td><td><BtnRpt classId= '12' btnEvent= {handleClick} url ='/api/classes/wizard' name='Wizard'/></td></tr>
            
        </tbody>
    </table>
    )
}