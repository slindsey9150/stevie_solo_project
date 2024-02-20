import { useState } from "react"
import NavCharacter from "../../NavCharacter/NavCharacter"
import { useDispatch } from "react-redux"
import './CSS FOLDER/CharacterClass.css'


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
    const demoClick = () => {
        console.log("i'm in a demo");
        setUseBackstory('In "Bee Movie," Barry B. Benson, a bee, embarks on a steamy affair with Vanessa, a human florist, amidst his legal battle against humanity. Their forbidden romance buzzes with passion, challenging societal boundaries and igniting desires beyond the hive.')
        setUseNotes('')
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
        {/* <FilterComp/> */}
        <p onClick={demoClick}><b>Write some things here buddy</b></p>
        <form onSubmit = {handleSubmit}>
        <textarea value={useBackstory}
        className='medieval-textarea'
        onChange={(event) => setUseBackstory(event.target.value)}
        placeholder='Backstory'/> 
        <textarea value={useNotes} 
        className='medieval-textarea'
        onChange={(event) => setUseNotes(event.target.value)}
        placeholder='Additional Notes'/> 
        <button className="BtnRpt">Save notes and backstory</button>
        </form>
        <br/>
        <br/>
        </>
    )
}