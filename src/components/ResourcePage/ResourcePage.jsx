import HomeScreenRoute from '../HomeScreenRoute/HomeScreenRoute';
import BackButton from '../BackButton/BackButton';

export default function ResourcePage () {
    return (
        <>
        <BackButton/>
        <p>
                This is the Resource Page
                
        </p>
        <div className="container">


     <HomeScreenRoute
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
     route="/equipment"/>
    </div>
        </>
    )
}