import styles from "./App.module.scss";

import { Cards, Chart, CountryPicker } from "./components";

function App() {
	return (
		<div className={styles.container}>
			<img
				className={styles.img}
				src="https://www.genliferegenerativemedicine.com/wp-content/uploads/2020/09/corona-virus-covid-19.png" alt="corona"
			/>
			<Cards />
			<CountryPicker />
			<Chart />
		</div>
	);
}

export default App;
