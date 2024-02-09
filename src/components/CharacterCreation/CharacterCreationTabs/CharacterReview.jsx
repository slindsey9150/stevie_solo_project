import NavCharacter from "../../NavCharacter/NavCharacter"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function CharacterReview () {
    const dispatch = useDispatch()
    const createReduce = useSelector(store => store.createchars)
    let abilityScores = Object.keys(createReduce.setAbilityScores)
    const handleClick = () => {
        console.log('handleClick Pushed');
        dispatch({type:'CREATE_CHARACTER', payload:createReduce})
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

        <> This is where you review your character before submitting them to the server</>
        <br/>
        <>Race: {createReduce.setRace}</>
        <br/>
        <>Class: {createReduce.setClass}</>
        <br/>
        <> ability scores: {abilityScores?.map((item,i) => <span key={i}> {item}</span>)}</>
        <br/>
        <>Background: {createReduce.setBackground}</>
        <br/>
        <>Notes: {createReduce.setNotes}</>
        <br></br>
        <>Backstory: {createReduce.setBackstory}</>
        <br/>
        <button onClick={handleClick}>Submit Character</button>
        
        </>
    )
}