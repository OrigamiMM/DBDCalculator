import { useState } from "react";
import styles from "./PerkSelector.module.css";

const perkList = [
  { name: "Ace in the Hole" },
  { name: "Adrenaline" },
  { name: "Aftercare" },
  { name: "Alert" },
  { name: "Any Means Necessary" },
  { name: "Appraisal" },
  { name: "Autodidact" },
  { name: "Background Player" },
  { name: "Balanced Landing" },
  { name: "Better than New" },
];

const PerkSelector = () => {
  const [perks, setPerks] = useState(perkList);
  const [query, setQuery] = useState("");

  const filterItems = (perkArray) => {
    if (query === "") return perkArray;
    const list = perkArray.filter((perk) => {
      return perk.name.toLowerCase().includes(query.toLowerCase());
    }); //Get filtered list
    return list;
    // console.log(list);
    // return list.concat(
    //   new Array(15).fill({ id: -1, name: "invalid" }).slice(0, 15)
    // ); //Append with 15 nulls, get first 15 elements so gauranteed full 15 perks
  };
  const renderArray = (items) => {
    let renderings = [];
    let guarantee = items.concat(new Array(15).fill(null)).slice(0, 15);
    for (let i = 0; i < 15; i++) {
      let p = guarantee[i];
      if (p === null) renderings.push({ id: i, name: "no Perk" });
      else renderings.push({ id: i, name: p.name });
    }
    console.log(renderings);
    console.log(typeof renderings);
    return renderings;
  };

  const filteredItems = filterItems(perks);
  const filteredRenderings = renderArray(filteredItems);

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <section className={styles.builder}>
      <label>Search Perk</label>
      <input type="search" onChange={changeHandler}></input>
      <ul>
        {filteredRenderings.map((perk) => {
          return <li key={perk.id}>{perk.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default PerkSelector;
