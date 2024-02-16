import { useState } from "react"
import NavCharacter from "../../NavCharacter/NavCharacter"
import { useDispatch } from "react-redux"



export default function CharacterDescription() {
    const [useBackstory, setUseBackstory] = useState('')
    const [useNotes, setUseNotes] = useState('')
    const dispatch = useDispatch()
    const handleSaveBackstory = () => {
        console.log('save backstory clicked', useBackstory);
        dispatch ({type:'SET_BACKSTORY', payload:useBackstory})
    }


    const handleSaveNotes = () => {
        console.log('save notes clicked', useNotes);
        dispatch ({type:'SET_NOTES', payload:useNotes})

    }
    // let BtnRpt = (props) => {
    //     return (
    //         <button onClick = {(event) => {handleClick(event)}}>{props.name}</button>
    //     )
    // }
    let FilterComp = () => {
        return (
            <div>
            <label>
                Choose your background
                <select  onChange={(event) => { handleChange(event) }}>

                    <option value="">No Filter</option>


                    <option value="?school=illusion">Acolyte</option>

                    <option value="?school=transmutation">Criminal/Spy</option>

                    <option value="?school=necromancy">Folk Hero</option>

                    <option value="?school=evocation">Haunted One</option>

                    <option value="?school=abjuration">Noble</option>

                    <option value="?school=divination">Sage</option>

                    <option value="?school=enchantment">Soldier</option>
                </select>
            </label>

        </div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSaveBackstory()
        handleSaveNotes()
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
        <>This is where you'll choose the Character Description</>
        <FilterComp/>
        <form onSubmit = {handleSubmit}>
        <input value={useBackstory}
        onChange={(event) => setUseBackstory(event.target.value)}
        placeholder='Backstory'/> 
        <input value={useNotes} 
        onChange={(event) => setUseNotes(event.target.value)}
        placeholder='Additional Notes'/> 
        <button>Save notes and backstory</button>
        </form>
        <br/>
        <br/>
        </>
    )
}