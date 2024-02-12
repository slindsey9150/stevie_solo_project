
//import components here
import ManagerComponent from '../ManagerComponent/ManagerComponent';
import ButtonRoute from '../ButtonRoute/ButtonRoute';
import BackButton from '../BackButton/BackButton';
import SingleCharacter from '../CharacterCreation/CharacterCreationTabs/SingleCharacter';
export default function CreateManageCharacters () {

    return (
        <>
        <BackButton/>
        <div> 
            This is the page that will
             route you to different
            aspects of your character


            <ManagerComponent
            name="Characters"
            firstColumn="Level"
            secondColumn='Class'
            thirdColumn='Name'
            fourthColumn='Race'
            fifthColumn='DM'
            dispatchType='FETCH_CHARACTERS'
            reducerType='characters'
            reducer='CharactersReducer'
            sixthColumn='Edit'
            firstRow='level'
            secondRow='class'
            thirdRow='name'
            fourthRow='race'
            keyProp='charid'
            routePath='viewcharacter'/>
          
            
        </div>

<ButtonRoute
name='Create Character'
route='/createcharacter'/>
<ButtonRoute
name='Delete Character'
route='/deletecharacter'/>
<br/><br/><br/><br/>

<SingleCharacter/>
</>
    )
}