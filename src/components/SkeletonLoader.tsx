import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonLoader() {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
			{[...Array(8)].map((_, index) => (
				<Card key={index} className='overflow-hidden'>
					<CardHeader>
						<Skeleton className='aspect-square w-full' />
					</CardHeader>

					<CardContent className='p-4 flex items-center justify-between'>
						<Skeleton className='h-6 w-3/4' />
						<Skeleton className='h-9 w-9' />
					</CardContent>
				</Card>
			))}
		</div>
	);
}
