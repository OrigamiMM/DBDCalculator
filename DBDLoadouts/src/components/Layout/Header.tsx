import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <h1 className={classes.siteTitle}>DBD Loadout Calculator</h1>
      <div className={classes.links}>
        <button>Help</button>
        <button>Info</button>
      </div>
    </header>
  );
};

export default Header;
