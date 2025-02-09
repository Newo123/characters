import { ICharacterItem } from '@/types/character';
import { CharacterItem } from './CharacterItem';
type Props = { characters: ICharacterItem[] };
export function CharecterList({ characters }: Props) {
	return (
		<div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-4'>
			{characters?.map((item: ICharacterItem) => (
				<CharacterItem {...item} key={item.id} />
			))}
		</div>
	);
}
