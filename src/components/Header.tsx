import { ROUTES } from '@/constants';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { NavLink } from 'react-router';
import { Badge } from './ui/badge';

export function Header() {
	const { items } = useLocalStorage();
	return (
		<header className='sticky top-0 bg-white z-[20]'>
			<div className='container mx-auto px-[1rem]'>
				<NavigationMenu>
					<NavigationMenuList className=' flex items-center gap-6 mx-auto w-fit py-5'>
						<NavigationMenuItem>
							<NavLink
								to={ROUTES.HOME}
								className={({ isActive }) =>
									isActive
										? 'text-slate-900'
										: 'text-slate-400 hover:text-slate-900 transition-colors duration-300'
								}
							>
								Главная
							</NavLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavLink
								to={ROUTES.FAVORITES}
								className={({ isActive }) =>
									isActive
										? 'text-slate-900'
										: 'text-slate-400 hover:text-slate-900 transition-colors duration-300'
								}
							>
								Избранное <Badge variant='destructive'>{items.length}</Badge>
							</NavLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
