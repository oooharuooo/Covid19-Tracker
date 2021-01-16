import React from "react";
import { useGlobalContext } from "../../context/context";

import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.scss";

function Chart() {
	const { dailyData } = useGlobalContext();

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

	return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
