import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CreateManageCharacters from '../CreateManageCharacters/CreateManageCharacters';
import CreateManageCampaigns from '../CreateManageCampaigns/CreateManageCampaigns';
import DeleteCharacter from '../DeleteCharacter/DeleteCharacter';
import CreateCharacter from '../CharacterCreation/CreateCharacter/CreateCharacter'
import CharacterAbilityScores from '../CharacterCreation/CharacterCreationTabs/CharacterAbilityScores';
import CharacterClass from '../CharacterCreation/CharacterCreationTabs/CharacterClass';
import CharacterDescription from '../CharacterCreation/CharacterCreationTabs/CharacterDescription';
import CharacterRace from '../CharacterCreation/CharacterCreationTabs/CharacterRace';
import CharacterEquipment from '../CharacterCreation/CharacterCreationTabs/CharacterEquipment';
import DeleteCampaign from '../DeleteCampaign/DeleteCampaign';
import CreateCampaign from '../CreateCampaign/CreateCampaign';
import CharacterReview from '../CharacterCreation/CharacterCreationTabs/CharacterReview';
import ResourcePage from '../ResourcePage/ResourcePage';
import RuleBookPage from '../AllRules/RuleBookPage/RuleBookPage'
import RuleCategory from '../AllRules/RuleCategory/RuleCategory'
import EquipmentPage from '../AllEquipment/EquipmentPage/EquipmentCategoriesPage'
import EquipmentCategory from '../AllEquipment/EquipmentCategory/EquipmentCategoryPage'
import SpellsPage from '../AllSpells/SpellsPage/SpellsPage'
import EditCharacter from '../CharacterCreation/EditCharacter';

import './App.css';




function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Characters else shows LoginPage
            exact
            path="/characters"
          >
            <CreateManageCharacters/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/campaigns"
          >
            <CreateManageCampaigns/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/createcampaign"
          >
            <CreateCampaign/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/deletecampaign"
          >
            <DeleteCampaign/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/createcharacter"
          >
            <CreateCharacter/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/editcharacter"
          >
            <EditCharacter/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterabilityscores"
          >
            <CharacterAbilityScores/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterclass"
          >
            <CharacterClass/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterdescription"
          >
            <CharacterDescription/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterequipment"
          >
            <CharacterEquipment/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterrace"
          >
            <CharacterRace/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/characterreview"
          >
            <CharacterReview/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows Campaigns else shows LoginPage
            exact
            path="/deletecharacter"
          >
            <DeleteCharacter/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows SpellsPage else shows LoginPage
            exact
            path="/spells"
          >
            <SpellsPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows SpellsPage else shows LoginPage
            exact
            path="/rulebook"
          >
            <RuleBookPage />
          </ProtectedRoute>
            <ProtectedRoute
            // logged in shows SpellsPage else shows LoginPage
            
            path='/rulebook/filtered'
          >
            <RuleCategory />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows EquipmentPage else shows LoginPage
            exact
            path="/equipment"
          >
            <EquipmentPage />
            
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows EquipmentPage else shows LoginPage
            exact
            path="/resources"
          >
            <ResourcePage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows EquipmentPage else shows LoginPage
            exact
            path="/equipment/filtered"
          >
            <EquipmentCategory />
          </ProtectedRoute>
          

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
