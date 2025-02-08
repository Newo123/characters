import { CharecterList } from '@/components/CharacterList';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Link } from 'react-router';

export default function Page() {
	const { items } = useLocalStorage();

	return (
		<div className='container mx-auto px-[1rem] flex flex-col gap-[1.5rem]'>
			<h1 className='text-3xl'>Список избранных</h1>
			{items.length > 0 ? (
				<CharecterList characters={items} />
			) : (
				<div className='flex flex-col gap-3'>
					<p className='text-[18px] font-medium'>
						Список избранных пуст. Добавьте персонажей с главной страницы!
					</p>
					<Button asChild={true} className='w-fit'>
						<Link to={'/'}>Ссылка на главную</Link>
					</Button>
				</div>
			)}
		</div>
	);
}
