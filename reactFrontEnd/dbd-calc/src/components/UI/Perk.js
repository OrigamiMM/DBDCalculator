import purple from "../../assets/PurpleBackgroundProper.svg";
import styles from "./Perk.module.css";

const Perk = (props) => {
  const overlay = props.selected ? (
    <img className={styles.selected} src={require("../../assets/Selected.svg").default} alt="" />
  ) : (
    <img className={styles.hover} src={require("../../assets/Hover.svg").default} alt="" />
  );
  const imgName = props.imgUrl.split("/").pop();
  const perkImg = require(`../../assets/perkImages/${imgName}`);
  return (
    <div className={`${styles.perkInteractable} ${props.className}`}>
      <div className={styles.perkDisplay}>
        {overlay}
        <img src={purple} alt="" />
        <img src={perkImg} alt="" />
      </div>
    </div>
  );
};

export default Perk;
