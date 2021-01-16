import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = "https://covid19.mathdro.id/api";

export const AppProvider = ({ children }) => {
	const [result, setResult] = useState({});
	const [dailyData, setDailyData] = useState([]);
	const [countries, setCountries] = useState([]);

	// Fetch Data
	const fetchData = async () => {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(url);

		setResult({ confirmed, recovered, deaths, lastUpdate });
	};

	// Fetch DailyData
	const fetchDailyData = async () => {
		const { data } = await axios.get(`${url}/daily`);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		setDailyData(modifiedData);
	};

	// Fetch Country
	const fetchCountry = async () => {
		const {data: {countries}} = await axios.get(`${url}/countries`);
		const countryName = countries.map((country) => country.name)
		setCountries(countryName);
	};

	useEffect(() => {
		fetchData();
		fetchDailyData();
	}, []);

	useEffect(() => {
		fetchCountry()
	},[setCountries])

	return (
		<AppContext.Provider value={{ result, dailyData,countries }}>
			{children}
		</AppContext.Provider>
	);
};

// Custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};
