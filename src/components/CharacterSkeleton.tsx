import { Skeleton } from './ui/skeleton';

export function CharacterSkeleton() {
	return (
		<>
			<h1 className='text-3xl'>Персонаж</h1>
			<div className='flex gap-7 md:flex-row flex-col'>
				<Skeleton className='shrink-0 aspect-square xl:basis-[40%] md:basis-1/2 basis-full rounded-lg overflow-hiddenl' />

				<div className=' w-full flex flex-col'>
					<Skeleton className='w-[400px] h-6' />
					<div className='flex flex-col gap-1 mt-6'>
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
						<Skeleton className='w-[400px] h-6' />
					</div>
					{/* <ul className='flex flex-col gap-1 mt-6'>
						<li className='text-lg'>
							<b>Пол:</b> {gender ? gender : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Вид:</b> {species ? species : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Статус:</b> {status ? status : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Тип:</b> {type ? type : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Местонахождение:</b>{' '}
							{location?.name ? location?.name : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Откуда:</b> {origin?.name ? origin?.name : notSpecified}
						</li>
						<li className='text-lg'>
							<b>Дата создания персонажа:</b>{' '}
							{created
								? new Date(created).toLocaleString('ru-RU', {
										month: 'long',
										day: 'numeric',
										year: 'numeric',
								  })
								: notSpecified}
						</li>
					</ul> */}
				</div>
			</div>
		</>
	);
}
