import { STORAGE_KEY } from '@/constants';
import { ICharacterItem, ILocalStorageContextType } from '@/types/character';
import {
	createContext,
	useEffect,
	useRef,
	useState,
	type ReactNode,
} from 'react';

// Создаем контекст
export const LocalStorageContext = createContext<
	ILocalStorageContextType | undefined
>(undefined);

// Провайдер контекста
export function LocalStorageProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<ICharacterItem[]>([]);
	const initializedRef = useRef(false);

	// Инициализация данных из localStorage
	useEffect(() => {
		if (!initializedRef.current) {
			const storedItems = localStorage.getItem(STORAGE_KEY);
			if (storedItems) {
				try {
					setItems(JSON.parse(storedItems));
				} catch (error) {
					console.error('Failed to parse stored items:', error);
				}
			}
			initializedRef.current = true;
		}
	}, []);

	// Обновление localStorage при изменении items
	useEffect(() => {
		if (initializedRef.current) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		}
	}, [items]);

	const addItem = (item: ICharacterItem) => {
		setItems(prevItems => [...prevItems, item]);
	};

	const removeItem = (id: number) => {
		setItems(prevItems => prevItems.filter(item => item.id !== id));
	};

	return (
		<LocalStorageContext.Provider value={{ items, addItem, removeItem }}>
			{children}
		</LocalStorageContext.Provider>
	);
}
