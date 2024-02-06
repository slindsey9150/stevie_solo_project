
//import components here
import ManagerComponent from '../ManagerComponent/ManagerComponent';

export default function CreateManageCharacters () {

    return (
        <div> 
            This is the page that will
             route you to different
            aspects of your character


            <ManagerComponent
            name="Characters"
            firstColumn="Level"
            secondColumn='Class'
            thirdColumn='Name'
            fourthColumn='Party'
            fifthColumn='DM'
            dispatchType='FETCH_CHARACTERS'/>
        </div>
    )
}