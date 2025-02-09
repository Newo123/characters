import { Character } from '@/components/Character';
import { CharacterSkeleton } from '@/components/CharacterSkeleton';
import { charackerService } from '@/services/CharacterService';
import { ICharacterItem } from '@/types/character';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function Page() {
	const { character } = useParams();

	const { data, isFetching } = useQuery({
		queryKey: ['characters'],
		queryFn: () => charackerService.getById(character),
	});

	return (
		<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
			{isFetching ? (
				<CharacterSkeleton />
			) : (
				<Character {...(data as ICharacterItem)} />
			)}
		</div>
	);
}
