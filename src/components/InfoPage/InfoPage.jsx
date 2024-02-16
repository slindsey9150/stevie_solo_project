import React from 'react';
import { useSelector } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Account Info Page</p>
      <p> Add Friends</p>
      <input></input>
      <button>Send Friend Request</button>

      <p> Friends List</p>
      <table>
        <thead>
          <th> 
            <td>Friend Name</td>
          <td>Request to join campaign</td>
          <td>send campaign invitation</td>
          <td>Delete friend</td>
          </th>
        </thead>
      </table>

    </div>
  );
}

export default InfoPage;
