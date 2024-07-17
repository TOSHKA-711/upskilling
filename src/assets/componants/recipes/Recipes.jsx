import "./recipes.css";
import recips1 from "../imges/recips1.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Recipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

    axios
      .get(url)
      .then((response) => {
        const meals = response.data.meals.slice(0, 3); // Limit to 3 objects
        setData(meals);
        console.log(meals);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="recips1">
      <h1>Recipes</h1>

      <div className="items">
        {data.map((meal, index) => (
          <div key={index} className="item">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h5>{meal.strMeal}</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur eaque incidunt libero, 
          </p>
          </div>
        ))}
      </div>

      <button className="btn">CONTACT US</button>
    </div>
  );
}

export default Recipes;
