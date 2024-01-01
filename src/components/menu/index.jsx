import styles from "./Menu.module.css";
import { MenuLink } from "../menuLink";

export const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobre-mim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};
