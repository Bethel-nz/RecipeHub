import {useEffect, useState} from 'react';

const useLocalStorage = (key, initialValue) => {
	const [value, StoredValue] = useState(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}
		try {
			const localValue = window.localStorage.getItem(key);
			return localValue ? JSON.parse(localValue) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, StoredValue];
};

export default useLocalStorage;
