
import NavCharacter from "../../NavCharacter/NavCharacter"




export default function CharacterDescription() {
    let InpRpt = (props) => {
        return (
            <>
            <>{props.name}</>
            <input 
            type="text"
            placeholder = {props.placehold}
            onChange={(event) => {{props.stateName}( event.target.value )}}
            ></input>
            </>
        )
    }
    let BtnRpt = (props) => {
        return (
            <button onClick = {(event) => {handleClick(event)}}>{props.name}</button>
        )
    }
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

    return (
        <>
        <NavCharacter/>
        <>This is where you'll choose the Character Description</>
        <FilterComp/>
        <InpRpt placehold='Backstory'/> <button>Save Backstory</button>
        <InpRpt placehold='Additional Notes'/> <button>Save Notes</button>
        </>
    )
}