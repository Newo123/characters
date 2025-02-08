import { LocalStorageProvider } from '@/contexts/LocalStorageContext';
import { Outlet } from 'react-router';

export default function Layout() {
	return (
		<LocalStorageProvider>
			<main className='py-[2.5rem]'>
				<Outlet />
			</main>
		</LocalStorageProvider>
	);
}
