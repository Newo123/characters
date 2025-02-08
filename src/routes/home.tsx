import { CharecterList } from '@/components/CharacterList';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
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
		refetch();
		setCurrentPage(parseInt(searchParams.get('page') || '1'));
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
			<Pagination className='mt-20'>
				<PaginationContent>
					{currentPage !== 1 && (
						<PaginationItem>
							<PaginationPrevious
								to={currentPage < 3 ? '' : `?page=${currentPage - 1}`}
							/>
						</PaginationItem>
					)}

					{currentPage > 2 && (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					)}

					<PaginationItem>
						<PaginationLink
							to={currentPage < 3 ? '' : `?page=${currentPage - 1}`}
							isActive={currentPage === 1}
						>
							{currentPage === 1
								? currentPage
								: data?.info.pages !== currentPage
								? currentPage - 1
								: currentPage - 2}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink
							to='#'
							isActive={currentPage !== 1 && data?.info.pages !== currentPage}
						>
							{currentPage === 1
								? currentPage + 1
								: currentPage === data?.info.pages
								? currentPage - 1
								: currentPage}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink
							to={
								currentPage === data?.info.pages
									? `?page=${currentPage}`
									: `?page=${currentPage + 1}`
							}
							isActive={data?.info.pages === currentPage}
						>
							{currentPage === 1
								? currentPage + 2
								: currentPage !== data?.info.pages
								? currentPage + 1
								: currentPage}
						</PaginationLink>
					</PaginationItem>

					{data?.info.pages && currentPage < data?.info?.pages && (
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					)}

					{data?.info.pages && currentPage !== data?.info.pages && (
						<PaginationItem>
							<PaginationNext to={`?page=${currentPage + 1}`} />
						</PaginationItem>
					)}
				</PaginationContent>
			</Pagination>
		</>
	);
}
