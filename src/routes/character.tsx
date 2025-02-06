import { useParams } from 'react-router';

export default function Page() {
	const { character } = useParams();
	return <main>{character}</main>;
}
