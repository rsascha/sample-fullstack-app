import { useAuth0 } from "@auth0/auth0-react";

export function Profile() {
  const { loginWithRedirect, user, logout } = useAuth0();
  console.debug({ user });

  if (!user) {
    loginWithRedirect();
    return null;
  }

  const { email, name, picture } = user;

  function handleLogoutClick() {
    logout();
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={picture} alt={name} />
      <p>{email}</p>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  );
}
