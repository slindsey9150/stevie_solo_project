
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
<br/><br/><br/>
<iframe src="https://www.youtube.com/watch?v=jn8hdcfbQhw"></iframe>

{/* <ExampleComponent/> */}

{/* <AudioRecorder/> */}
{/* <WebcamComponent/> */}
{/* <ToggleSwitch label="video or photo"/> */}

{/* <WebcamCapture/>
<WebcamVideo/>
<GeoLocator/>
<PhoneCamera/> */}
{/* <ReactCameraPro/> */}
{/* <input type="file" accept="image/*" capture="environment"/> */}
{/* <input type="file" id="fileInput" multiple></input>
<input type="file" id="audioInput" accept="audio/*" multiple></input>

<input type="datetime-local" id="audioInput"/> */}

<SingleCharacter/>
</>
    )
}