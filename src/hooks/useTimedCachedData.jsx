import { useEffect } from 'react';
import useAxios from './useAxios';
import useLocalStorage from './useLocalStorage';

const useTimedCahedData = (dataUrl, localStorageKey, cacheDuration) => {
	const [value, setValue] = useLocalStorage(localStorageKey, []);
	const [data, fetchError, isLoading] = useAxios(dataUrl);

	useEffect(() => {
		if (data && data.length > 0) {
			setValue(data);
		}
	}, [data, setValue]);

	const isDataStale = () => {
		const storedTime = localStorage.getItem(`${localStorageKey}_time`);
		if (storedTime) {
			const currentTime = Date.now();
			const timeDifference = currentTime - parseInt(storedTime);
			return timeDifference > cacheDuration;
		}
		return true;
	};

	useEffect(() => {
		if (isDataStale()) {
			setValue([]);
		}
	}, [cacheDuration, setValue]);

	useEffect(() => {
		if (value && value.length > 0) {
			localStorage.setItem(localStorageKey, JSON.stringify(value));
			localStorage.setItem(`${localStorageKey}_time`, Date.now().toString());
		}
	}, [localStorageKey, value]);

	return {value, fetchError, isLoading};
};

export default useTimedCahedData;
