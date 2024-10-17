import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/user-list">User List</NavLink>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}
