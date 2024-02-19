import HomeScreenRoute from '../HomeScreenRoute/HomeScreenRoute';
import BackButton from '../BackButton/BackButton';
import './ResourcePage.css'

export default function ResourcePage() {
    return (
        <div>
            <BackButton />
            <div className="Routecontainer">
                <div id="div1" className="large-div">
                    <div className='fantasy-rulebook-background-image'>
                        <HomeScreenRoute
                            text="Search Spells"
                            displayImg="url for image"
                            route="/spells"
                            class='centered-button' />
                           
                    </div>
                </div>
                <div id="div2" className="large-div">
                    <div className='background-imageTwo'>
                        <HomeScreenRoute
                            text="Reference Rulebook"
                            displayImg="url for image"
                            route="/rulebook/" 
                            class='centered-button'/>
                    </div>
                </div>
                <div id="div3" className="large-div">
                    <div className='fantasy-rulebook-background-imageThree'>
                        <HomeScreenRoute
                            text="See all Equipment"
                            displayImg="url for image"
                            route="/equipment"
                             class='centered-button' />
                    </div>
                </div>
            </div>




            {/* <HomeScreenRoute
     text="Search Spells"
     displayImg="url for image"
     route="/spells"/>
     <HomeScreenRoute
     text="Reference Rulebook"
     displayImg="url for image"
     route="/rulebook/"/>
     <HomeScreenRoute
     text="See all Equipment"
     displayImg="url for image"
     route="/equipment"/> */}

        </div>
    )
}