import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ICharacterItem } from '@/types/character';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';
import { Toggle } from './ui/toggle';

export function AddToFavorites({ id, name, image }: ICharacterItem) {
	const { addItem, items, removeItem } = useLocalStorage();
	const isFavorite = items.some(item => item.id === id);

	const toggleFavorites = (pressed: boolean) => {
		if (pressed) {
			addItem({ id, name, image });
			toast(`Персонаж ${name} добавлен в избранное!`);
		} else {
			removeItem(id);
			toast(`Персонаж ${name} удалён из избранного!`);
		}
	};
	return (
		<Toggle
			aria-label='Toggle italic'
			className='w-fit'
			defaultPressed={isFavorite}
			onPressedChange={toggleFavorites}
		>
			<Heart className='w-full h-full' />
		</Toggle>
	);
}
