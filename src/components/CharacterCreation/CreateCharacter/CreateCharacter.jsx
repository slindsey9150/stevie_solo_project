import NavCharacter from "../../NavCharacter/NavCharacter"

export default function CreateCharacter () {

    return (
        <>
        <NavCharacter/>
        <>This is where you'll Create a Character</>
        <p> Welcome to Character Creation!</p>
        <input placeholder='name' type='text'/>
        <input placeholder='level' type='number'/>

        </>
    )
}