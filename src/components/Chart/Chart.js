import React from "react";
import { useGlobalContext } from "../../context/context";

import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.scss";

function Chart() {
	const { dailyData, result, countryPicker } = useGlobalContext();

	const { confirmed, recovered, deaths } = result;

	const lineChart = dailyData.length && (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map(({ confirmed }) => confirmed),
						label: "Infected",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: dailyData.map(({ deaths }) => deaths),
						label: "Deaths",
						borderColor: "red",
						backgroundColor: "rgba(255,0,0,0.5)",
						fill: true,
					},
				],
			}}
		/>
	);

	const barChart = result.confirmed && (
		<Bar
			data={{
				labels: ["Infected", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${countryPicker}` },
			}}
		/>
	);

	return (
		<div className={styles.container}>
			{countryPicker ? barChart : lineChart}
		</div>
	);
}

export default Chart;
