import NavCharacter from "../../NavCharacter/NavCharacter"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
export default function CharacterReview () {
    const history = useHistory()
    const dispatch = useDispatch()
    const createReduce = useSelector(store => store.createchars)
    let abilityScores = Object.values(createReduce.setAbilityScores)
    const handleClick = () => {
        console.log('handleClick Pushed');
        dispatch({type:'CREATE_CHARACTER', payload:createReduce})
        history.push('/characters')
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="single-character">
      
        <>Name: {createReduce.setName}</>
        <br/>
        <>Level: {createReduce.setLevel}</>
        <br/>
        <>Allignment: {createReduce.setAlignment}</>
        <br/>
        <>Race: {createReduce.setRace}</>
        <br/>
        <>Class: {createReduce.setClass}</>
        <br/>
        <> ability scores;<br/>
         Charisma: {abilityScores[0]}<br/>
         Constitution: {abilityScores[1]}<br/>
         Dexterity: {abilityScores[2]}<br/>
         Intelligence: {abilityScores[3]}<br/>
         Strength: {abilityScores[4]}<br/>
         Wisdom: {abilityScores[5]}</>
        <br/>
        <>Background: {createReduce.setBackground}</>
        <br/>
        <div className="backstory-div">
        <>Notes: {createReduce.setNotes}</>
        <br></br>
        </div>
        <div className="backstory-div">
        <>Backstory: {createReduce.setBackstory}</>
        <br/>
        </div>
        <button className='BtnRpt'onClick={handleClick}>Submit Character</button>
        </div>
        
        </>
    )
}