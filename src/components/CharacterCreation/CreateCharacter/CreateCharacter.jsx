import NavCharacter from "../../NavCharacter/NavCharacter"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import logger from "redux-logger"
export default function CreateCharacter () {
    const nameStore = useSelector(store => store.createchars.setName)
    const levelStore = useSelector(store => store.createchars.setLevel)
    const [useName, setUseName] = useState('')
    const [useLevel, setUseLevel] = useState('')
    const dispatch = useDispatch()

    const nameSubmit = () => {
        console.log('name submitted', useName);
        dispatch({type:'SET_NAME', payload:useName})
        setUseName('')


    }
    const levelSubmit = () => {
        console.log('level submitted', useLevel);
        dispatch({type:'SET_LEVEL', payload:useLevel})
        setUseLevel('')
    }
    const handleClick = (event) => {
        event.preventDefault()
        nameSubmit()
        levelSubmit()
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

        <>This is where you'll Create a Character</>
        <p> Welcome to Character Creation!</p>
        <form onSubmit = {handleClick}>
        <input value={useName} placeholder='name' type='text' onChange={(event) => setUseName(event.target.value)}/>
        <input value={useLevel} placeholder='level' type='number' onChange={(event) => setUseLevel(event.target.value)}/>
        <button>Submit name and level</button>
        </form>
        <br/>
        <br/>
        <br/>
        <>{}</>
        </>
    )
}