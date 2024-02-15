import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import BackButton from "../BackButton/BackButton";

export default function EditCharacter() {
    const dispatch = useDispatch()
    const history = useHistory()

    const characterstore = useSelector(store => store.characters.CharactersReducer)
    const singleStore = useSelector(store => store.characters.SingleCharacter)
    const editCharacter = useSelector (store => store.characters.editCharacter)
    // console.log('singleStore', singleStore);
    //    console.log( characterstore?.findIndex(x => x.charid == singleStore))
    let storeIndex = characterstore?.findIndex(x => x.charid == singleStore)

    const handleChange = (event) => {
        dispatch({ 
                    type: 'EDIT_ONCHANGE', 
                    payload: { property: 'name', value: event.target.value }
                });
            }
    const handleSubmit = (event) => {
        event.preventDefault()

    axios.put(`/api/characters/${singleCharacter?.charid}`, editCharacter)
    .then( response => {
        // clean up reducer data            
        dispatch({ type: 'EDIT_CLEAR' });

        // refresh will happen with useEffect on Home
        history.push('/characters'); // back to list
    })
    .catch(error => {
        console.log('error on PUT: ', error);
    })

        console.log('submitting form');
    }

    
    // console.log('store index', storeIndex);
    // console.log('character', characterstore[storeIndex]);
    let singleCharacter = characterstore[storeIndex]
    return (
        <>
            <BackButton />
            <br />
            Edit your Character here
            <br/>
            We are editing {singleCharacter?.name} With id {singleCharacter?.charid}
            <br />
            {singleCharacter?.name}
            <br />
            {singleCharacter?.race}
            <br />
            {singleCharacter?.class}
            <br />
            {singleCharacter?.charisma}
            <br />
            {singleCharacter?.constitution}
            <br />
            {singleCharacter?.dexterity}
            <br />
            {singleCharacter?.intelligence}
            <br />
            {singleCharacter?.strength}
            <br />
            {singleCharacter?.wisdom}
            <br />
            {singleCharacter?.notes}
            <br />
            {singleCharacter?.backstory}
            <br />
            {singleCharacter?.name}
            <form onSubmit = {handleSubmit}>
                <input onChange = {(event) => handleChange(event)}
                defaultValue = {singleCharacter?.name}
                placeholder = 'Character Name'>
                </input>
                <button>Submit Changes</button>

            </form>
        </>
    )
}