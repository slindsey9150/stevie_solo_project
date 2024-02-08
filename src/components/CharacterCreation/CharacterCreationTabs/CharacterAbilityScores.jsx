import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"



export default function CharacterAbilityScores() {
    const characterCreation = useSelector(store => store.createchars.setrace)
    let [yourCha, setyourCha] = useState()
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
    let allScores = [{charisma:{yourCha}},{constitution:{yourConst}},{dexterity:{yourDex}},
                    {intelligence:{yourInt}},{strength:{yourStr}},{wisdom:{yourWis}}]
  
    const setRace = () => {
        dispatch({type:'SET_AS', payload:allScores})
    }
   
   



    return (
        <>
        <NavCharacter/>
        <>This is where you'll choose your Ability Scores</>
        <p>Your Ability Scores: Charisma:{yourCha} | Constitution:{yourConst} |
        Intelligenct:{yourInt} | Dexterity:{yourDex} | Wisdom:{yourWis} |
        Strength:{yourStr} 
        </p> <button onClick = {setRace}>Confirm your Ability Scores</button>
       <p><b>Pick your race</b></p> 
        <table>
            
      
            <tbody>
                <tr><td><InpRpt value={yourCha} type='number'  stateName='Cha' name='Charisma'/><BtnRpt stateName='setYourCha' name='Confirm Score'/></td>
                <td><InpRpt value={yourConst} type='number' stateName='Const' name='Constitution'/><BtnRpt stateName='setYourConst' name='Confirm Score'/></td>
                <td><InpRpt value={yourInt} type='number' stateName='Int' name='Intelligence'/><BtnRpt stateName='setYourInt' name='Confirm Score'/></td></tr>
                <tr><td><InpRpt value={yourDex} type='number' stateName='Dex' name='Dexterity'/><BtnRpt stateName='setYourDex' name='Confirm Score'/></td>
                <td><InpRpt value={yourWis} type='number' stateName='Wis' name='Wisdom'/><br></br><BtnRpt stateName='setYourWis' name='Confirm Score'/></td>
                <td><InpRpt value={yourStr} type='number' stateName='setyourStr' name='Strength'/><br></br><BtnRpt stateName='setYourStr' name='Confirm Score'/></td></tr>
                
            </tbody>
        </table>
        </>
    )
}