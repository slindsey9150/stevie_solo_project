
//import components here
import ManagerComponent from '../ManagerComponent/ManagerComponent';
import ButtonRoute from '../ButtonRoute/ButtonRoute';
export default function CreateManageCharacters () {

    return (
        <>
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
            reducer='CharactersReducer'/>
            
        </div>

<ButtonRoute
name='Create Character'
route='/createcharacter'/>
<ButtonRoute
name='Delete Character'
route='/deletecharacter'/>
</>
    )
}