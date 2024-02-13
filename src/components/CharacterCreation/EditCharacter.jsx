import { useSelector } from "react-redux"
import BackButton from "../BackButton/BackButton";

export default function EditCharacter() {
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
            <BackButton />
            <br />
            Edit your Character here
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
        </>
    )
}