import { ROUTES } from '@/constants';
import { ICharacterItem } from '@/types/character';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { AddToFavorites } from './AddToFavorites';
import { Button } from './ui/button';

const notSpecified = 'не указано';

export function Character({
	name,
	image,
	gender,
	species,
	status,
	created,
	origin,
	location,
	type,
	id,
}: ICharacterItem) {
	return (
		<>
			<Button asChild={true} className='w-fit'>
				<Link to={ROUTES.HOME}>
					<ChevronLeft />
					На главную
				</Link>
			</Button>
			<h1 className='sm:text-3xl text-xl'>Персонаж {name}</h1>
			<div className='flex gap-7 md:flex-row flex-col'>
				<div className='shrink-0 xl:basis-[40%] md:basis-1/2 basis-full rounded-lg overflow-hidden relative'>
					<img
						src={image}
						alt={name}
						className='w-full h-full object-cover object-center'
					/>
					<div className='absolute top-2 left-2'>
						<AddToFavorites id={id} name={name} image={image} />
					</div>
				</div>
				<div className=' w-full flex flex-col'>
					<h2 className='sm:text-2xl text-lg font-medium'>
						Информация о персонаже:
					</h2>
					<ul className='flex flex-col gap-1 sm:mt-6 mt-3'>
						<li className='sm:text-lg text-sm'>
							<b>Пол:</b> {gender ? gender : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Вид:</b> {species ? species : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Статус:</b> {status ? status : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Тип:</b> {type ? type : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Местонахождение:</b>{' '}
							{location?.name ? location?.name : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Откуда:</b> {origin?.name ? origin?.name : notSpecified}
						</li>
						<li className='sm:text-lg text-sm'>
							<b>Дата создания персонажа:</b>{' '}
							{created
								? new Date(created).toLocaleString('ru-RU', {
										month: 'long',
										day: 'numeric',
										year: 'numeric',
								  })
								: notSpecified}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
