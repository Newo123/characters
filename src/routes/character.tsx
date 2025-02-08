import { charackerService } from '@/services/CharacterService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

export default function Page() {
	const { character } = useParams();

	const { data, isFetching } = useQuery({
		queryKey: ['characters'],
		queryFn: () => charackerService.getById(character!),
	});

	if (isFetching) {
		return <div>Loading...</div>;
	}
	console.log(data);
	return <main>{character}</main>;
}
