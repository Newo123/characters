import { Header } from '@/components/Header';
import { Toaster } from '@/components/ui/sonner';
import { LocalStorageProvider } from '@/contexts/LocalStorageContext';
import { Outlet } from 'react-router';

export default function Layout() {
	return (
		<LocalStorageProvider>
			<Header />
			<main className='py-[2.5rem]'>
				<Outlet />
			</main>
			<Toaster position='top-right' />
		</LocalStorageProvider>
	);
}
