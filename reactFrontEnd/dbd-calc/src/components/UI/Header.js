import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 id={styles.webTitle}>DBD LOADOUT CALCULATOR</h1>
      <nav id={styles.navButtons}>
        <ul>
          <button>INFO</button>
          <button>HELP</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
