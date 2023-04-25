import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All");

  function handleCuisineChange(event) {
    setCuisine(event.target.value);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (cuisine === "All") {
      return true;
    } else {
      return food.cuisine === cuisine;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods);
    console.log(newFood);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

 

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <br/>
      <br/>
      <select name="filter" onChange={handleCuisineChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
      </select>
      <br/>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;



// function handleLiClick (id) {
//   const filteredFoods = foods.filter(food => food.id !== id)
//   setFoods(filteredFoods);
// }