import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './NavCharacter.css';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';

function NavCharacter() {
  const user = useSelector((store) => store.user);

  return (
    <div className="NavCharacter">
                <BackButton/>

        <Link to='/createcharacter'>
        <h2 className="NavCharacter-title">Create a Character</h2>
        </Link>
      <div>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="NavCharacterLink" to="/characterclass">
              Class
            </Link>
            <Link className="NavCharacterLink" to="/characterrace">
              Race
            </Link>
            <Link className="NavCharacterLink" to="/characterabilityscores">
              Ability Scores
            </Link>
            <Link className="NavCharacterLink" to="/characterdescription">
              Description
            </Link>
            {/* <Link className="NavCharacterLink" to="/characterequipment">
             Equipment
            </Link> */}
            <Link className="NavCharacterLink" to="/characterreview">
             Review Character
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavCharacter;
