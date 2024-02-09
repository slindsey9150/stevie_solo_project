import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function DeleteCharacter () {

    const handleDelete = (characterId) => {
        console.log('delete button clicked', characterId);
        dispatch({type:'DELETE_CHARACTER', payload: characterId})
    }
    const dispatch = useDispatch()
    const store = useSelector(store => store.characters)
    console.log('store', store);

    return (
        <>
        <>This is where you'll Delete a Character</>
        {store.CharactersReducer?.map((character) => { return (
            <p key={character.id}>{Object.values(character)}<button onClick={() => {handleDelete(character.charid)}}>Delete Character</button></p>
        )
        })}
        </>
    )
}