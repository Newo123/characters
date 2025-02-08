import { charackerService } from '@/services/CharacterService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

export default function Page() {
	const { character } = useParams();

	const { data, isFetching } = useQuery({
		queryKey: ['characters'],
		queryFn: () => charackerService.getById(character),
	});

	if (isFetching) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
			<h1 className='text-3xl'>Персонаж {data?.name}</h1>
			<div className='flex gap-7 md:flex-row flex-col'>
				<div className='shrink-0 xl:basis-[40%] md:basis-1/2 basis-full rounded-lg overflow-hidden'>
					<img
						src={data?.image}
						alt={data?.name}
						className='w-full h-full object-cover object-center'
					/>
				</div>
				<div className=' w-full flex flex-col'>
					<h2 className='text-2xl font-medium'>Информация о персонаже:</h2>
					<ul className='flex flex-col gap-1 mt-6'>
						<li className='text-lg'>Пол: {data?.gender}</li>
						<li className='text-lg'>Вид: {data?.species}</li>
						<li className='text-lg'>Статус: {data?.status}</li>
						<li className='text-lg'>Местонахождение: {data?.location?.name}</li>
						<li className='text-lg'>Откуда: {data?.origin?.name}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
