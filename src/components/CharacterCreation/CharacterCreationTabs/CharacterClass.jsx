import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import SingleRule from "../../AllRules/SingleRule/SingleRule"
import BtnRpt from '../../BtnRptTwo/BtnRptTwo'
import SingleItem from '../../AllEquipment/SingleItem/SingleItem'
import ChooseLevel from './ChooseLevel'
export default function CharacterClass() {
    const classLevel = useSelector(store => store.createchars.getClassLevel)
    const characterLevel = useSelector(store => store.createchars.setLevel)
    const itemReducer = useSelector(store => store.equipment.equipmentUrl)
    console.log('character level', characterLevel);
    // console.log('Create Character', characterCreation);
console.log('class level', classLevel);
    const dispatch = useDispatch()


let [yourClass, setYourClass] = useState('')
let [yourUrl, setYourUrl] = useState('')
let [yourClassId, setYourClassId] = useState('')


    let classlevelone = {}
    let classlevelonelable = ''

    let classleveltwo = ''
    let classlevelthree = ''
    let classlevelfour = ''
    let classlevelfive = ''
    let classlevelsix = ''
    let classlevelseven = ''
    let classleveleight = ''
    let classlevelnine = ''

    if (classLevel.spellcasting) {
        classlevelonelable = 'spellcasting'
        classlevelone.cantrips_known = classLevel?.spellcasting?.cantrips_known
        classlevelone.spell_slots_level_1 = classLevel?.spellcasting?.spell_slots_level_1
        classlevelone.spell_slots_level_2 = classLevel?.spellcasting?.spell_slots_level_2
        classlevelone.spell_slots_level_3 = classLevel?.spellcasting?.spell_slots_level_3
        classlevelone.spell_slots_level_4 = classLevel?.spellcasting?.spell_slots_level_4
        classlevelone.spell_slots_level_5 = classLevel?.spellcasting?.spell_slots_level_5
        classlevelone.spell_slots_level_6 = classLevel?.spellcasting?.spell_slots_level_6
        classlevelone.spell_slots_level_7 = classLevel?.spellcasting?.spell_slots_level_7
        classlevelone.spell_slots_level_8 = classLevel?.spellcasting?.spell_slots_level_8
        classlevelone.spell_slots_level_9 = classLevel?.spellcasting?.spell_slots_level_9

    }

    const setClass =() => {
        dispatch({type:'SET_CLASS', payload:yourClass})
        dispatch({type:'SET_CLASS_ID', payload:yourClassId})
    }

    let sendLevel = 1
    const handleClick = (event) => {
        setYourClass(event.target.closest('button').textContent)
        setYourClassId(event.target.closest('button').title)
        // setYourUrl(event.target.closest('button').id)
        let useUrl = event.target.closest('button').id
        console.log('your url', yourUrl);
        console.log('Class Level', classLevel);
        dispatch({type:'RULE_URL', payload:useUrl})
        if (characterLevel == '') {
            sendLevel = 1
        }
        else {
            sendLevel = characterLevel
        }
        dispatch({type:'SET_CHAR_LEVEL', payload: sendLevel, classurl: yourUrl})
        dispatch({type:'SET_LEVEL', payload: sendLevel})
    }
    const addToInv = () => {
        console.log('adding to inventory', itemReducer.name);
        dispatch({type:'SET_EQUIPMENT', payload: itemReducer.name, newItem: 'item'})
    }

    return (
       <div>
        <NavCharacter/>
        <div className="class-page">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="yourClass">Your Class: {yourClass} <button className='ConfButton'onClick = {setClass}>Confirm Your Class</button></p>
        <ChooseLevel
            charclass = {yourUrl}/> 
        
     
      <br></br>
      <br></br>
      <br></br>
        <table className="class-table">
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
        <div>
            {/* <p>Would you like to add {itemReducer?.name} to your inventory? <button onClick={addToInv} >YES</button></p> */}
        </div>

        <div>
            {/* Here we will show information about each class */}
            
            <div>
                {classlevelonelable}: {classlevelone.cantrips_known} {classlevelone.spell_slots_level_1} {classlevelone.spell_slots_level_2} {classlevelone.spell_slots_level_3}
            </div>
            <br/>
            {/* Here we will display level specific information about each class */}
            <SingleRule/>
            <div className="SingleItemClass">
            {/* <SingleItem/> */}
            </div>
        </div>

        </div>
        </div>
    )
}