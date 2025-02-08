import { LocalStorageContext } from '@/contexts/LocalStorageContext';
import { useContext } from 'react';

// Хук для использования контекста
export const useLocalStorage = () => {
	const context = useContext(LocalStorageContext);
	if (context === undefined) {
		throw new Error(
			'useLocalStorage must be used within a LocalStorageProvider'
		);
	}
	return context;
};
