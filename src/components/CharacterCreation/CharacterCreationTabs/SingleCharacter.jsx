import { useSelector } from "react-redux"

function SingleCharacter () {
    const characterstore = useSelector(store => store.characters.CharactersReducer)
    const singleStore = useSelector(store => store.characters.SingleCharacter)
    console.log('singleStore', singleStore);
//    console.log( characterstore?.findIndex(x => x.charid == singleStore))
    let storeIndex = characterstore?.findIndex(x => x.charid == singleStore)
    console.log('store index', storeIndex);
    console.log('character', characterstore[storeIndex]);
    let singleCharacter = characterstore[storeIndex]
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
       </>
    )
}

export default SingleCharacter