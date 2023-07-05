import React from "react";
import "./FoodInfo.css";
import JumpRope from "../assets/skip-rope.png";
import Cycling from "../assets/cycling.png";
import Dumbbell from "../assets/dumbbell.png";
import Running from "../assets/training.png";
import BarChart from "./BarChart";

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

	const isHighCalories = calories > 220;

	const chartArr = [
		fat_total_g,
		fat_saturated_g,
		protein_g,
		sodium_mg / 1000,
		potassium_mg / 1000,
		cholesterol_mg / 1000,
		carbohydrates_total_g,
		fiber_g,
		sugar_g,
	];

	return (
		<div className="container">
			<h3>
				{serving_size_g}g {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
				Contains a Total of {calories} Calories.
			</h3>
			{isHighCalories && (
				<p className="warning">
					<b>Alert:</b> The food you searched contains a high calorie
					content! ⚠️
				</p>
			)}
			<div className="upper-wrap">
				<div className="food-info">
					<ul>
						<li>
							<p className="name">Serving Size:</p>{" "}
							<p className="data">
								{serving_size_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Total Fat:</p>{" "}
							<p className="data">
								{fat_total_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Saturated Fat:</p>{" "}
							<p className="data">
								{fat_saturated_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Protein:</p>{" "}
							<p className="data">
								{protein_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Sodium:</p>{" "}
							<p className="data">
								{sodium_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Potassium:</p>{" "}
							<p className="data">
								{potassium_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Cholesterol:</p>{" "}
							<p className="data">
								{cholesterol_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Total Carbohydrates:</p>{" "}
							<p className="data">
								{carbohydrates_total_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Fiber:</p>{" "}
							<p className="data">
								{fiber_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Sugar:</p>{" "}
							<p className="data">
								{sugar_g}
								<span>g</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="exercise-info">
					<div className="exercise">
						<img src={Running} alt="Icon" />
						<p>
							Be Fit & Healthy by a minimum of{" "}
							<b>{Math.ceil(calories * 0.085714)}</b> Minutes of
							Running to burn <b>{calories}</b> Calories!
						</p>
					</div>
					<div className="exercise">
						<img src={Cycling} alt="Icon" />
						<p>
							Feel the Joy as you Cycle for just{" "}
							<b>{Math.ceil(calories * 0.125)}</b> Minutes to burn{" "}
							<b>{calories}</b> Calories!
						</p>
					</div>
					<div className="exercise">
						<img src={Dumbbell} alt="Icon" />
						<p>
							To Torch those <b>{calories}</b> Calories, hit the
							Gym for at least{" "}
							<b>{Math.ceil(calories * 0.2381)}</b> Minutes
						</p>
					</div>
					<div className="exercise">
						<img src={JumpRope} alt="Icon" />
						<p>
							To skip to a Healthier you, Grab Skipping Rope and
							Skip for <b>{Math.ceil(calories * 0.08)}</b> Minutes
							to burn <b>{calories}</b> Calories!
						</p>
					</div>
				</div>
			</div>
			<div className="lower-wrap">
				<BarChart className="bar-chart" chartData={chartArr} />
			</div>
		</div>
	);
};

export default FoodInfo;
