import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './UserPage.css'


// Component Imports
import HomeScreenRoute from '../HomeScreenRoute/HomeScreenRoute';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div>
      <h2 className='welcome-bar'>Welcome, {user.username}!</h2>
      

      <div className="Routecontainer">
        <div id="div1" className="large-div">
          <div className='background-image'>
            <HomeScreenRoute
              text="Create/Manage Characters"
              displayImg="url for image"
              route="/characters"
              class='centered-button' />
          </div>
        </div>
        <div id="div2" className="large-div">
          <div className='background-imageTwo'>
            <HomeScreenRoute
              text="Additional Tabletop RPG Resources"
              displayImg="url for image"
              route="/resources/"
              class='centered-button' />
          </div>
        </div>
        <div id="div3" className="large-div">
          <div className='background-imageThree'>
            <HomeScreenRoute
              text="Create/Manage Campaigns"
              displayImg="url for image"
              route="/campaigns"
              class='centered-button' />
          </div>
        </div>
      </div>




    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
