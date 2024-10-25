import { useAuth0 } from "@auth0/auth0-react";
import { LoadingIndicator } from "@client/components";

export function Login({ className }: { className: string }) {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className={className}>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={className}>
        <p>There was an issue logging you in.</p>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }

  return (
    <div className={className}>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
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
