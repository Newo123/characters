import { ICharacterItem } from '@/types/character';

export function useLocalStore() {
	const set = (item: ICharacterItem) => {
		const items = localStorage.getItem('character');

		if (items) {
			const parseItems = [...JSON.parse(items), item];
			localStorage.setItem('character', JSON.stringify([...parseItems]));
		} else {
			localStorage.setItem('character', JSON.stringify([item]));
		}
	};
	const remove = (item: ICharacterItem) => {
		const items = localStorage.getItem('character');
		if (items) {
			const parseItems = JSON.parse(items).filter(
				(currentItem: ICharacterItem) => item.id !== currentItem.id
			);
			localStorage.setItem('character', JSON.stringify([...parseItems]));
		}
	};
	const getAll = (): ICharacterItem[] | null => {
		const items = localStorage.getItem('character');

		if (items) {
			const parseItems = JSON.parse(items);
			return parseItems;
		} else {
			return null;
		}
	};
	return { set, remove, getAll };
}
