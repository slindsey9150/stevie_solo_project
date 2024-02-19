import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import BackButton from "../BackButton/BackButton";
import { useState } from "react";
import EditInput from "./EditInput";
import ChooseLevel from "./CharacterCreationTabs/ChooseLevel";
// import EditCharacterShowNew from "./CharacterCreationTabs/EditCharacterShowNew";
import SingleRule from "../AllRules/SingleRule/SingleRule";

export default function EditCharacter() {
    const dispatch = useDispatch()
    const history = useHistory()
    let [editCriteria, setEditCriteria] = useState()
    let [editChange, setEditChange] = useState()
    const characterstore = useSelector(store => store.characters.CharactersReducer)
    const singleStore = useSelector(store => store.characters.SingleCharacter)
    const editCharacter = useSelector (store => store.characters.editCharacter)
    // console.log('singleStore', singleStore);
    //    console.log( characterstore?.findIndex(x => x.charid == singleStore))
    let storeIndex = characterstore?.findIndex(x => x.charid == singleStore)


    const handleChange = (event) => {
        dispatch({ 
                    type: 'EDIT_ONCHANGE', 
                    payload: { property: [editCriteria], value: Number(event.target.value) }
                });
            }
     const handleChangeText = (event) => {
                dispatch ({
                    type: 'EDIT_ONCHANGE',
                    payload: {property: [editCriteria], value: (event.target.value) }
                })
            }
    const handleSubmit = (event) => {
        event.preventDefault()

    axios.put(`/api/characters/${singleCharacter?.charid}`, {editCharacter, editCriteria})
    .then( response => {
        // editCriteria= ('')
        setEditCriteria(undefined)
        console.log('edit criteria', editCriteria);
        dispatch({type: 'FETCH_CHARACTERS'})

        // refresh will happen with useEffect on Home
    })
    .catch(error => {
        console.log('error on PUT: ', error);
    })
        console.log('submitting form');
      
    }
    const handleFinishEdit = () => {
        console.log('done editing');
        history.push('/characters'); // back to list
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });
            dispatch({ type: 'SINGLE_CLEAR' });

    }
    let inputType = 'text'
    if (editCriteria == 'charisma' || 'dexterity'|| 'intelligence' || 'strength' || 'wisdom' || 'constitution' || 'level') {
        inputType = 'number'
    }
    else {
        editCriteria = 'text'
    }



    // console.log('store index', storeIndex);
    // console.log('character', characterstore[storeIndex]);
    let singleCharacter = characterstore[storeIndex]
    return (
        <div className='edit-container'>
            <BackButton />
          
            <div className='edit-div'>
          
            <br/>
           
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id='name'>Name</button> {singleCharacter?.name}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id='level'>Level</button> {singleCharacter?.level}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id='alignment'>Alignment</button> {singleCharacter?.alignment}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="race_id">Race</button> {singleCharacter?.race}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="class_id">Class</button> {singleCharacter?.class}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="charisma">Charisma</button> {singleCharacter?.charisma}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="constitution">Constitution</button> {singleCharacter?.constitution}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="dexterity">Dexterity</button> {singleCharacter?.dexterity}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="intelligence">Intelligence</button>  {singleCharacter?.intelligence}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="strength">Strength</button> {singleCharacter?.strength}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="wisdom">Wisdom</button> {singleCharacter?.wisdom}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="notes">Notes</button> {singleCharacter?.notes}
            <br />
            <button className="BtnRpt" onClick={(event) => setEditCriteria(event.target.closest('button').id)}value={editCriteria} id="backstory">Backstory</button> {singleCharacter?.backstory}
            </div>
            <br />
            {/* <form onSubmit = {handleSubmit}>
            <label>
            {editCriteria}
        <input type={inputType}onChange = {(event) => handleChange(event)}
        defaultValue = {singleCharacter?.[editCriteria]}>
        </input>
        </label>
        <button>Submit Changes</button>
        </form> */}
        <EditInput
        onSubmit= {handleSubmit}
        type= {inputType}
        onChange = {(event) => handleChange(event)}
        textOnChange = {(event) => handleChangeText(event)}
        compLabel = {editCriteria}
        compDefValue = {singleCharacter?.[editCriteria]}
        editCriteria={editCriteria}/>
            <button className="edit-finish" onClick={handleFinishEdit}>Finish Changing Character</button>
            {/* <EditCharacterShowNew/> */}
            <SingleRule/>
        </div>

    )
}