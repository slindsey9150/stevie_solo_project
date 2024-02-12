import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
// import InpRpt from "../../InpRpt/InpRpt"


export default function CharacterAbilityScores() {
    const characterCreation = useSelector(store => store.createchars.setrace)
    let [yourCha, setyourCha] = useState('')
    let [yourDex, setyourDex] = useState()
    let [yourConst, setyourConst] = useState()
    let [yourStr, setyourStr] = useState()
    let [yourWis, setyourWis] = useState()
    let [yourInt, setyourInt] = useState()
    const dispatch = useDispatch([])
    let BtnRpt = (props) => {
        const handleClick = (event) => {
            console.log('all Scores');
            console.table( allScores);
            console.log('number entered', event.target.closest('InpRpt'));
            console.log('State Name', props.stateName);
            // {props.stateName}(event.target.closest('input').textContent)
            
         }
        return (
            <button onClick ={handleClick}>{props.name}</button>
        )
    }
    let InpRpt = (props) => {
        let onChangeFun;
        if (props.stateName === 'Cha'){
            onChangeFun= (
              (event) =>  {setyourCha( event.target.value)}
            )
        }
        if (props.stateName === 'Dex'){
            onChangeFun= (
              (event) =>  {setyourDex( event.target.value)}
            )
        }
        if (props.stateName === 'Const'){
            onChangeFun= (
              (event) =>  {setyourConst( event.target.value)}
            )
        }
        if (props.stateName === 'Int'){
            onChangeFun= (
              (event) =>  {setyourInt( event.target.value)}
            )
        }
        if (props.stateName === 'Str'){
            onChangeFun= (
              (event) =>  {setyourStr( event.target.value)}
            )
        }
        if (props.stateName === 'Wis'){
            onChangeFun= (
              (event) =>  {setyourWis( event.target.value)}
            )
        }
        return (
            <>
            <>{props.name}</>
            <input 
            onChange={onChangeFun}
            placeholder = {props.name}
            value={props.value}
            type={props.type}
            ></input>
            </>
        )
    }
    let allScores = [yourCha,yourConst,yourDex,yourInt,yourStr,yourWis]
  
    const setRace = () => {
        dispatch({type:'SET_AS', payload:allScores})
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
        <br/>
        <br/>
        <p className="yourClass">Your Ability Scores: Charisma:{yourCha} | Constitution:{yourConst} |
        Intelligenct:{yourInt} | Dexterity:{yourDex} | Wisdom:{yourWis} |
        Strength:{yourStr} 
        <button onClick = {setRace}>Confirm your Ability Scores</button>
        </p> 
        <br/>
        <br/>
        <br/>

        <table>
        <thead>
                    <tr>
                    <th colSpan='3' className='oneHead'>Choose Your Ability Scores</th>
                    </tr>
                   
            
                
            </thead>
            
      
            <tbody>
                <tr><td><InpRpt value={yourCha} type='number'  stateName='Cha' name='Charisma'/><BtnRpt stateName='setyourCha' name='Confirm Score'/></td>
                <td><InpRpt value={yourConst} type='number' stateName='Const' name='Constitution'/><BtnRpt stateName='setyourConst' name='Confirm Score'/></td>
                <td><InpRpt value={yourDex} type='number' stateName='Dex' name='Dexterity'/><BtnRpt stateName='setyourDex' name='Confirm Score'/></td></tr>
                <tr><td><InpRpt value={yourInt} type='number' stateName='Int' name='Intelligence'/><BtnRpt stateName='setyourInt' name='Confirm Score'/></td>
                <td><InpRpt value={yourStr} type='number' stateName='Str' name='Strength'/><br></br><BtnRpt stateName='setyourStr' name='Confirm Score'/></td>
                <td><InpRpt value={yourWis} type='number' stateName='Wis' name='Wisdom'/><br></br><BtnRpt stateName='setyourWis' name='Confirm Score'/></td></tr>
                
            </tbody>
        </table>
        </>
    )
}