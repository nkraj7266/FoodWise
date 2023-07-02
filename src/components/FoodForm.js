import React, { useState } from "react";

const FoodForm = ({ onSubmit }) => {
	const [foodName, setFoodName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(foodName);
	};

	const handleChange = (e) => {
		setFoodName(e.target.value);
	};

	return (
		<div>
			<h1>Your Food Dost</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter Food Name"
					value={foodName}
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default FoodForm;
