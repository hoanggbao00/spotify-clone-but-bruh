import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from '../Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
	children: React.ReactNode;
	songs: Track[] | any[]
}

const Sidebar: React.FC<SidebarProps> = ({
	children,
	songs
}) => {
	const location = useLocation()
	const pathname = location.pathname


	const routers = useMemo(
		() => [
			{
				icon: HiHome,
				label: 'Home',
				active: pathname === '/',
				href: '/',
			},
			{
				icon: BiSearch,
				label: 'Search',
				active: pathname === '/search',
				href: '/search',
			},
		],
		[pathname]
	);

	return (
  <div className='flex h-full'>
    <div className='hidden lg:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
      <Box>
        <div className='flex flex-col gap-y-4 px-5 py-4'>
        {routers.map( item => (
          <SidebarItem key={item.label} {...item} />
        ))}
        </div>
      </Box>
      <Box className='overflow-y-auto h-full'>
        <Library songs={songs}/>
      </Box>
    </div>
    <main className='h-full flex-1 overflow-y-auto py-2'>
      {children}
    </main>
  </div>);
};

export default Sidebar;
