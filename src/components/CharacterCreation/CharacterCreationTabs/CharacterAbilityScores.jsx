import NavCharacter from "../../NavCharacter/NavCharacter"
import './CSS FOLDER/Characterclass.css'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import InpRpt from "../../InpRpt/InpRpt"
import SingleRule from "../../AllRules/SingleRule/SingleRule"


export default function CharacterAbilityScores() {
    const characterCreation = useSelector(store => store.createchars.setAS)
    let [yourCha, setyourCha] = useState('')
    let [yourDex, setyourDex] = useState()
    let [yourConst, setyourConst] = useState()
    let [yourStr, setyourStr] = useState()
    let [yourWis, setyourWis] = useState()
    let [yourInt, setyourInt] = useState()
    const dispatch = useDispatch([])

 



    let allScores = [yourCha,yourConst,yourDex,yourInt,yourStr,yourWis]
  
    const setAS = () => {
        dispatch({type:'SET_AS', payload:allScores})
    }
   
   const demoClick = () => {
    console.log('im in a demo');
    setyourCha('21')
    setyourConst('3')
    setyourDex('16')
    setyourInt('17')
    setyourStr('1')
    setyourWis('10')
   }



    return (
        <>
        <NavCharacter/>
        
        <br/>
        <br/>
        <p onClick={demoClick}className="yourClass">Your Ability Scores: Charisma:{yourCha} | Constitution:{yourConst} |
        Intelligenct:{yourInt} | Dexterity:{yourDex} | Wisdom:{yourWis} |
        Strength:{yourStr} 
        <button className="ConfButton" onClick = {setAS}>Confirm your Ability Scores</button>
        </p> 
       

        <table className="ability-scores-table">
        <thead>
                    <tr>
                    <th colSpan='3' className='oneHead'>Choose Your Ability Scores</th>
                    </tr>
            </thead>
            
      
            <tbody>
                <tr><InpRpt
                  url='/api/ability-scores/cha'
                  value={yourCha}
                  type='number'  
                  stateName='Cha' 
                  name='Charisma'
                  onChangeFun={(event) =>  {setyourCha( event.target.value)}}/>
                <InpRpt 
                url='/api/ability-scores/con'
                value={yourConst} 
                type='number' 
                stateName='Const' 
                name='Constitution'
                onChangeFun={(event) =>  {setyourConst( event.target.value)}}/>
                <InpRpt
                url='/api/ability-scores/dex' 
                value={yourDex} 
                type='number' 
                stateName='Dex' 
                name='Dexterity'
                onChangeFun={ (event) =>  {setyourDex( event.target.value)}}/></tr>
                <tr><InpRpt 
                url='/api/ability-scores/int' 
                value={yourInt} 
                type='number' 
                stateName='Int' 
                name='Intelligence'
                onChangeFun={(event) =>  {setyourInt( event.target.value)}
            }/>
                <InpRpt 
                url='/api/ability-scores/str' 
                value={yourStr} 
                type='number' 
                stateName='Str' 
                name='Strength'
                onChangeFun={(event) =>  {setyourStr( event.target.value)}
            }/>
                <InpRpt 
                url='/api/ability-scores/wis' 
                value={yourWis} 
                type='number' 
                stateName='Wis' 
                name='Wisdom'
                onChangeFun={(event) =>  {setyourWis( event.target.value)}
            }/></tr>
                
            </tbody>
        </table>
        <SingleRule/>
        </>
    )
}