import { useState } from "react";
import styles from "./LoadoutBuilder.module.css";
import Card from "../../UI/Card";
import InventorySelect from "./InventorySelect"
//import purpleBackground from '../../../assets/PurpleBackgroundProper.svg'

const LoadoutBuilder = () => {
  
  return (
    <Card>
      <hr />
      <InventorySelect></InventorySelect>
    </Card>
  );
};

export default LoadoutBuilder;
