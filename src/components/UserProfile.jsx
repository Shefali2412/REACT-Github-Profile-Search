
import React from 'react';
import '../style.css'; 

function UserProfile ({ user })  {
  return (
    <div className="userProfileContainer">
      <img
        src={user.avatar_url}
        alt="User pic"
        className="userProfileImage"
      />
      <div className="userInfoContainer">
        <p><b>Full Name:</b>{user.name}</p>
        <p><b>Username: </b>{user.login}</p>
        <p><b>Location:</b> {user.location}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
