import { CharecterList } from '@/components/CharacterList';
import { ImprovedPagination } from '@/components/ImprovedPagination';
import { ICharacterItem } from '@/types/character';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { charackerService } from '../services/CharacterService';
export default function Page() {
	const [searchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState<number>(
		parseInt(searchParams.get('page') || '1')
	);
	const { data, isFetching, refetch, error } = useQuery({
		queryKey: ['characters'],
		queryFn: () => charackerService.getAll(searchParams),
	});
	useEffect(() => {
		setCurrentPage(parseInt(searchParams.get('page') || '1'));
		refetch();
	}, [searchParams]);

	if (isFetching) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
				<h1 className='text-3xl'>Список персонажей</h1>
				<CharecterList characters={data?.results as ICharacterItem[]} />
			</div>
			<ImprovedPagination
				currentPage={currentPage}
				totalPages={data?.info.pages || 1}
			/>
		</>
	);
}
