import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function SingleCharacter () {
    const dispatch = useDispatch()
    const history = useHistory()
    const characterstore = useSelector(store => store.characters.CharactersReducer)
    const singleStore = useSelector(store => store.characters.SingleCharacter)
    const editStore = useSelector(store => store.characters.editCharacter)
    // console.log('singleStore', singleStore);
//    console.log( characterstore?.findIndex(x => x.charid == singleStore))
    let storeIndex = characterstore?.findIndex(x => x.charid == singleStore)
    // console.log('store index', storeIndex);
    console.log('character', characterstore[storeIndex]);
    let singleCharacter = characterstore[storeIndex]

    const editCharacter = () => {
    dispatch({type:'GET_EDIT_CHAR', payload: singleCharacter})

    history.push('/editcharacter')
}
if (singleStore == 0) {
    return <></>
}
else {




    return (
       <>
       View your Character here
       <br/>
       Name: {singleCharacter?.name}
       <br/>
       Race: {singleCharacter?.race}
       <br/>
       Class: {singleCharacter?.class}
       <br/>
       Charisma: {singleCharacter?.charisma}
       <br/>
       Constitutuion: {singleCharacter?.constitution}
       <br/>
       Dexterity: {singleCharacter?.dexterity}
       <br/>
       Intelligence: {singleCharacter?.intelligence}
       <br/>
       Strength: {singleCharacter?.strength}
       <br/>
       Wisdom: {singleCharacter?.wisdom}
       <br/>
       Notes: {singleCharacter?.notes}
       <br/>
       Backstory: {singleCharacter?.backstory}
       <br/>
       <button onClick = {editCharacter}>EDIT ✏️</button>

       </>
    )
}
}

export default SingleCharacter