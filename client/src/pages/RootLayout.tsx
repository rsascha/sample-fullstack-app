import { Header } from "@client/components";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}
