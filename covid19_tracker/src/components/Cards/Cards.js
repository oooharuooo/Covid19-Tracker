import React from "react";
import { useGlobalContext } from "../../context/context";

import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.scss";

function Cards() {
	const {
		result: { confirmed, recovered, deaths, lastUpdate },
    } = useGlobalContext();
    
	if (!confirmed) return "Loading";
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							INFECTED
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Active Cases</Typography>
					</CardContent>
				</Grid>

				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							RECOVERED
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={recovered.value}
								duration={2}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Recoveries</Typography>
					</CardContent>
				</Grid>

				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							DEATHS
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={deaths.value}
								duration={2}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">Deaths</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
}

export default Cards;
