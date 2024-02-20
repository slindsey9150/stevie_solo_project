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
       <div className="single-character">
       <br/>
       Name: {singleCharacter?.name}
       <br/>
       Alignment: {singleCharacter?.alignment}
       <br/>
       Level: {singleCharacter?.level}
       <br/>
       Race: {singleCharacter?.race}
       <br/>
       Class: {singleCharacter?.class}
       <br/>
       Charisma: {singleCharacter?.charisma}
       <br/>
       Constitution: {singleCharacter?.constitution}
       <br/>
       Dexterity: {singleCharacter?.dexterity}
       <br/>
       Intelligence: {singleCharacter?.intelligence}
       <br/>
       Strength: {singleCharacter?.strength}
       <br/>
       Wisdom: {singleCharacter?.wisdom}
       <br/>
       <div className="backstory-div">
       Notes: {singleCharacter?.notes}
       <br/>
       </div>
       <div className="backstory-div">
       Backstory: {singleCharacter?.backstory}
       <br/>
       </div>
       <button className="edit-char"onClick = {editCharacter}>EDIT ✏️</button>

       </div>
    )
}
}

export default SingleCharacter