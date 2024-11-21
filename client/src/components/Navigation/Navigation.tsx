import { NavLink } from "react-router-dom";

export function Navigation({ className }: { className: string }) {
  return (
    <nav className={className}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user-list">User List</NavLink>
    </nav>
  );
}
