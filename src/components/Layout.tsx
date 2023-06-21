import ModalProvider from '../providers/ModalProvider';
import Player from './Player/Player';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<ModalProvider />
			<Sidebar songs={[{id: '1', title: 'Peaceful Piano', author: 'hoanggbao'}]}>{children}</Sidebar>
			<Player />
		</>
	);
};

export default Layout;
