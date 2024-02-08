import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './NavCampaign.css';
import { useSelector } from 'react-redux';

function NavCampaign() {
  const user = useSelector((store) => store.user);

  return (
    <div className="NavCampaign">
     
        <h2 className="NavCampaign-title">Create a Campaign</h2>
    
      <div>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="NavCampaignLink" to="/plauerbackstories">
              Player Backstories
            </Link>
            <Link className="NavCampaignLink" to="/campaignsetting">
              Campaign Setting
            </Link>
            <Link className="NavCampaignLink" to="/campaignnotes">
              Notes
            </Link>
            <Link className="NavCampaignLink" to="/campaignlinks">
              Links
            </Link>
            <Link className="NavCampaignLink" to="/generatenpcs">
             Generate NPCs
            </Link>


            <LogOutButton className="NavCampaignLink" />
          </>
        )}

        <Link className="NavCampaignLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default NavCampaign;
