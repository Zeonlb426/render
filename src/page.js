import { useState } from "react";
import './App.css';
import {CitiesList} from './CitiesList.js'

const listOfCities = ['Берлин','Киев','Токио','Нью-йорк','Прага'];

export default function Page() {
  const [name, setName] = useState("");
  const [list, setList] = useState(listOfCities);

  const handleClick = () => {
    setList([...list, name]);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleRemoveClick = (item) => {
    const filteredList = list.filter((listItem) => listItem !== item);

    setList(filteredList);
  };

  console.log("Page render");

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <CitiesList list={list} onRemoveClick={handleRemoveClick} />
    </div>
  );
};

