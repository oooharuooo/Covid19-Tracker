import React from "react";
import { useGlobalContext } from "../../context/context";

import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.scss";

function CountryPicker() {
	const { countries, setCountryPicker } = useGlobalContext();

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => setCountryPicker(e.target.value)}
			>
				<option value="">United States</option>
				{countries.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}

export default CountryPicker;
