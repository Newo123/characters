import { useLocalStore } from '@/hooks/useLocalStore';
import { ICharacterItem } from '@/types/character';
import { Heart } from 'lucide-react';
import { Link } from 'react-router';
import { Card, CardContent, CardHeader } from './ui/card';
import { Toggle } from './ui/toggle';

export function CharacterItem({ id, name, image }: ICharacterItem) {
	const { remove, set, getAll } = useLocalStore();
	const isFavorite = getAll()?.find(item => item.id === id);

	return (
		<Card key={id}>
			<CardHeader>
				<Link
					to={`/characters/${id}`}
					className='overflow-hidden rounded-md flex'
				>
					<img
						className='w-full h-full object-center object-cover hover:scale-[1.05] transition-all duration-300'
						src={image}
						alt={name}
						loading='lazy'
						width={300}
						height={300}
					/>
				</Link>
			</CardHeader>
			<CardContent className='flex flex-row items-center justify-between'>
				<Link
					to={`/characters/${id}`}
					className='text-lg font-semibold underline hover:no-underline'
				>
					{name}
				</Link>
				<Toggle
					aria-label='Toggle italic'
					className='w-fit'
					defaultPressed={isFavorite ? true : false}
					onPressedChange={pressed =>
						pressed
							? set({ id: id, name: name, image: image })
							: remove({ id, name, image })
					}
				>
					<Heart className='w-full h-full' />
				</Toggle>
			</CardContent>
		</Card>
	);
}
