import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

// Component Imports
import HomeScreenRoute from '../HomeScreenRoute/HomeScreenRoute';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

     <HomeScreenRoute
     text="Create/Manage Characters"
     displayImg="url for image"
     route="/characters"/>
     <HomeScreenRoute
     text="Additional Tabletop RPG Resources"
     displayImg="url for image"
     route="/resources/"/>
     <HomeScreenRoute
     text="Create/Manage Campaigns"
     displayImg="url for image"
     route="/campaigns"/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
