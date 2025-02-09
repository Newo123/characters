import { ROUTES } from '@/constants';
import { ICharacterItem } from '@/types/character';
import { Link } from 'react-router';
import { AddToFavorites } from './AddToFavorites';
import { Card, CardContent, CardHeader } from './ui/card';

export function CharacterItem({ id, name, image }: ICharacterItem) {
	return (
		<Card key={id}>
			<CardHeader>
				<Link
					to={`${ROUTES.CHARACTER}/${id}`}
					className='overflow-hidden rounded-md flex aspect-square'
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
					to={`${ROUTES.CHARACTER}/${id}`}
					className='text-lg font-semibold underline hover:no-underline'
				>
					{name}
				</Link>
				<AddToFavorites id={id} name={name} image={image} />
			</CardContent>
		</Card>
	);
}
