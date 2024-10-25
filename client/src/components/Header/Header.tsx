import { Login, Navigation } from "@client/components";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <Navigation className={styles.navigation} />
      <Login className={styles.login} />
    </header>
  );
}
