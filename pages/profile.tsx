import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';

const Profile = () => {
  const { user, isAuthenticated, logout, loginWithPopup } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      {isAuthenticated && (
        <>
          <p>{user?.name}</p>
          <p>{user?.profile}</p>
          <p>{user?.picture}</p>
          <p>{user?.locale}</p>
          <p>{user?.email}</p>
          <p>{user?.website}</p>
        </>
      )}{' '}
      {isAuthenticated && (
        <div>
          <button onClick={() => logout()}>Log out</button>
        </div>
      )}
      {!isAuthenticated && (
        <button onClick={() => loginWithPopup()}>Log in</button>
      )}
    </div>
  );
};

export default Profile;
