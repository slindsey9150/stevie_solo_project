import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function EditCharacterShowNew() {
    const characters = useSelector(store => store.characters.CharactersReducer)
    const singleCharacterIndex = useSelector(store => store.characters.SingleCharacter)
    console.log('specific character', characters[Number(singleCharacterIndex)]);
    // console.log('single character index', singleCharacterIndex);
    let storeIndex = characters?.findIndex(x => x.charid == singleCharacterIndex)
console.log('store index', storeIndex);
    let characterArray = []
    useEffect(() => {
        getCharacters()
    }, [])
    const getCharacters = () => {
        console.log('edited baracters', characters);
        characterArray.push(characters)
        console.log('character array', characterArray);
    }
    return (
       <div> {characterArray.map((trait, i) => { return ( <p key = {i}> {trait}</p>)})}

       Charisma: 
       {characters[storeIndex]?.charisma}
       <br/>
       Constitution: 
       {characters[storeIndex].constitution}
       <br/>
       Dexterity: 
       {characters[storeIndex].dexterity}
       <br/>
       Intelligence: 
       {characters[storeIndex].intelligence}
       <br/>
       Strength: 
       {characters[storeIndex].strength}
       <br/>
       Wisdom: 
       {characters[storeIndex].wisdom}
       <br/>
       Notes: 
       {characters[storeIndex].notes}
       <br/>
       Backstory: 
       {characters[storeIndex].backstory}
       <br/>
       Name: 
       {characters[storeIndex].name}
       <br/>
       Class: 
       {characters[storeIndex].class}
       <br/>
       Race: 
       {characters[storeIndex].race}
       <br/>
       Backstory: 
       {characters[storeIndex].backstory}

       </div>
    )


} 