import { useLocation } from 'react-router';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from './ui/pagination';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	maxVisiblePages?: number;
}

export function ImprovedPagination({
	currentPage,
	totalPages,
	maxVisiblePages = window.innerWidth < 768 ? 3 : 5,
}: PaginationProps) {
	const location = useLocation();

	const generatePageNumbers = () => {
		const pageNumbers = [];
		const halfVisible = Math.floor(maxVisiblePages / 2);
		let start = Math.max(1, currentPage - halfVisible);
		const end = Math.min(totalPages, start + maxVisiblePages - 1);

		if (end - start + 1 < maxVisiblePages) {
			start = Math.max(1, end - maxVisiblePages + 1);
		}

		for (let i = start; i <= end; i++) {
			pageNumbers.push(i);
		}

		return pageNumbers;
	};

	const createPageLink = (page: number) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.set('page', page.toString());
		return `?${searchParams.toString()}`;
	};

	const pageNumbers = generatePageNumbers();

	return (
		<Pagination className='mt-20'>
			<PaginationContent>
				{currentPage > 1 && window.innerWidth >= 768 && (
					<PaginationItem>
						<PaginationPrevious to={createPageLink(currentPage - 1)} />
					</PaginationItem>
				)}

				{pageNumbers[0] > 1 && (
					<>
						<PaginationItem>
							<PaginationLink to={createPageLink(1)}>1</PaginationLink>
						</PaginationItem>
						{pageNumbers[0] > 2 && <PaginationEllipsis />}
					</>
				)}

				{pageNumbers.map(pageNumber => (
					<PaginationItem key={pageNumber}>
						<PaginationLink
							to={createPageLink(pageNumber)}
							isActive={pageNumber === currentPage}
						>
							{pageNumber}
						</PaginationLink>
					</PaginationItem>
				))}

				{pageNumbers[pageNumbers.length - 1] < totalPages && (
					<>
						{pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
							<PaginationEllipsis />
						)}
						<PaginationItem>
							<PaginationLink to={createPageLink(totalPages)}>
								{totalPages}
							</PaginationLink>
						</PaginationItem>
					</>
				)}

				{currentPage < totalPages && window.innerWidth >= 768 && (
					<PaginationItem>
						<PaginationNext to={createPageLink(currentPage + 1)} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
}
