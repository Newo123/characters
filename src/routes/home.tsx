import { CharacterItem } from '@/components/CharacterItem';
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
import { QueryClient, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { charackerService } from '../services/CharacterService';
export default function Page() {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryClient = new QueryClient();
	const [currentPage, setCurrentPage] = useState<number>(
		parseInt(searchParams.get('page') || '1')
	);
	const { data, isFetching, refetch, error } = useQuery(
		{
			queryKey: ['characters'],
			queryFn: () => charackerService.getAll(searchParams),
		},
		queryClient
	);
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
		<main className='py-[2.5rem]'>
			<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
				<h1 className='text-3xl'>Character list</h1>
				<div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-4'>
					{data?.results.map((item: ICharacterItem) => (
						<CharacterItem {...item} key={item.id} />
					))}
				</div>
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
		</main>
	);
}
