import {City} from './City.js'

export const CitiesList = ({list, onRemoveClick}) => {
    console.log("List render");
  
    return list.map((item) => {
      return <City key={item} city={item} onRemoveClick={onRemoveClick} />;
    });
  };
  