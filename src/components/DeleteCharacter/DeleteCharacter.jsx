import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import BackButton from "../BackButton/BackButton"

export default function DeleteCharacter () {

    const handleDelete = (characterId) => {
        // console.log('delete button clicked', characterId);
        dispatch({type:'DELETE_CHARACTER', payload: characterId})
        dispatch({type:'FETCH_CHARACTERS'})

    }
    const dispatch = useDispatch()
    const store = useSelector(store => store.characters)
    // console.log('store', store);

    return (
        <div>
            <BackButton/>
            <div className="delete-character">
       
        {store.CharactersReducer?.map((character) => { return (
            <p key={character.id}>Name: {character.name}Level: {character.level}Class: {character.class} Race: {character.race}<button onClick={() => {handleDelete(character.charid)}}>Delete Character</button></p>
        )
        })}
        </div>
        </div>
    )
}