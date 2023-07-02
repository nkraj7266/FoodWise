import React from "react";

const FoodInfo = ({ foodData }) => {
	if (!foodData) {
		return <div>Loading...</div>;
	}

	if (!foodData || foodData.length === 0) {
		return (
			<div style={{ color: "green" }}>
				Please double-check your input! 🌼
			</div>
		);
	}

	const {
		name,
		calories,
		serving_size_g,
		fat_total_g,
		fat_saturated_g,
		protein_g,
		sodium_mg,
		potassium_mg,
		cholesterol_mg,
		carbohydrates_total_g,
		fiber_g,
		sugar_g,
	} = foodData[0];

	return (
		<div>
			<h2>{name}</h2>
			<p>Calories: {calories}</p>
			<p>Serving Size: {serving_size_g}g</p>
			<p>Total Fat: {fat_total_g}g</p>
			<p>Saturated Fat: {fat_saturated_g}g</p>
			<p>Protein: {protein_g}g</p>
			<p>Sodium: {sodium_mg}mg</p>
			<p>Potassium: {potassium_mg}mg</p>
			<p>Cholesterol: {cholesterol_mg}mg</p>
			<p>Total Carbohydrates: {carbohydrates_total_g}g</p>
			<p>Fiber: {fiber_g}g</p>
			<p>Sugar: {sugar_g}g</p>
		</div>
	);
};

export default FoodInfo;
