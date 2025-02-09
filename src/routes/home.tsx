import { CharecterList } from '@/components/CharacterList';
import { ImprovedPagination } from '@/components/ImprovedPagination';
import { SearchInput } from '@/components/SearchInput';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { ICharacterItem } from '@/types/character';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { charackerService } from '../services/CharacterService';

export default function Page() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState<number>(
		parseInt(searchParams.get('page') || '1')
	);
	const [searchTerm, setSearchTerm] = useState<string>(
		searchParams.get('name') || ''
	);

	const { data, isFetching, refetch, error } = useQuery({
		queryKey: ['characters'],
		queryFn: () => charackerService.getAll(searchParams),
		retry: false,
	});

	useEffect(() => {
		setCurrentPage(parseInt(searchParams.get('page') || '1'));
		setSearchTerm(searchParams.get('name') || '');
		refetch();
	}, [searchParams, refetch]);

	const handleSearch = useCallback(
		(value: string) => {
			setSearchParams({ page: '1', name: value });
		},
		[setSearchParams, setSearchTerm]
	);

	return (
		<>
			<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
				<h1 className='text-3xl'>Список персонажей</h1>
				<SearchInput
					value={searchTerm}
					onChange={handleSearch}
					onSearch={setSearchTerm}
				/>
				{isFetching ? (
					<SkeletonLoader />
				) : error ? (
					<div>Персонаж по запросу {searchTerm} не найден!</div>
				) : (
					<CharecterList characters={data?.results as ICharacterItem[]} />
				)}
			</div>

			{data?.info?.pages && (
				<ImprovedPagination
					currentPage={currentPage}
					totalPages={data?.info?.pages || 1}
				/>
			)}
		</>
	);
}
