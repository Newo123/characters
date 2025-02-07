import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { charackerService } from '../services/CharacterService';

export default function Page() {
	const { data } = useQuery({
		queryKey: ['characters'],
		queryFn: charackerService.getAll,
	});
	console.log(data);
	return (
		<main>
			<div>Home</div>
			<Button>Home</Button>
		</main>
	);
}
