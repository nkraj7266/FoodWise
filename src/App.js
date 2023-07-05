import React, { useState, useEffect } from "react";
import FoodForm from "./components/FoodForm";
import FoodInfo from "./components/FoodInfo";
import axios from "axios";
import "./App.css";

function App() {
	const [foodData, setFoodData] = useState("");

	const fetchFoodData = async (foodName) => {
		const apiKey = "/HyUktpUUh60meWNxQO/NA==9L9PAMbWfHnpRJ28";
		try {
			const response = await axios.get(
				`https://api.api-ninjas.com/v1/nutrition?query=${foodName}`,
				{
					headers: {
						"X-Api-Key": apiKey,
					},
				}
			);
			const foodData = response.data;
			setFoodData(foodData);
		} catch (error) {
			console.error("Failed to fetch nutritional information:", error);
		}
	};

	useEffect(() => {
		fetchFoodData("water");
	}, []);

	const handleFoodSubmit = (foodName) => {
		fetchFoodData(foodName);
	};

	return (
		<div className="App">
			<FoodForm onSubmit={handleFoodSubmit} />
			{foodData && <FoodInfo foodData={foodData} />}
		</div>
	);
}

export default App;
