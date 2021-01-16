import styles from "./App.module.scss";

import { Cards, Chart, CountryPicker } from "./components";

function App() {
	return (
		<div className={styles.container}>
			<Cards />
			<CountryPicker />
			<Chart />
		</div>
	);
}

export default App;
