

//import components here
import ManagerComponent from '../ManagerComponent/ManagerComponent';
import ButtonRoute from '../ButtonRoute/ButtonRoute';

export default function CreateManageCampaigns () {

    return (
        <>
        <div> 
            This is the page that will
             route you to different
            aspects of your Campaign



            <ManagerComponent
            name="Campaigns"
            firstColumn="Creation Date"
            secondColumn='Class'
            thirdColumn='Name'
            fourthColumn='Party'
            fifthColumn='RB'
            dispatchType='FETCH_CAMPAIGNS'
            reducerType='campaigns'
            reducer='CampaignsReducer'/>
        </div>
        <ButtonRoute
        name='Create Campaign'
        route='/createcampaign'/>
        <ButtonRoute
        name='Delete Campaign'
        route='/deletecampaign'/>
       </>
    )
}