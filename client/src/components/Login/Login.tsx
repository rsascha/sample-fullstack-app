import { useAuth0 } from "@auth0/auth0-react";

export function Login({ className }: { className: string }) {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  console.debug({ user, isAuthenticated, isLoading });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userInfo =
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ) : null;

  return (
    <div className={className}>
      <p>{isLoading ? "loading" : ""}</p>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {userInfo}
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
}
