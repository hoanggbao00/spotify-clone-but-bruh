import ModalProvider from '../providers/ModalProvider';
import Player from './Player/Player';
import Sidebar from './Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const data = [
  {
    key: '1',
    title: 'Peaceful Piano',
    artists: [
      {
        id: 'hoanggbao',
        adamid: 'hoanggbao',
      },
    ],
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ModalProvider />
      <Sidebar
        songs={data}
      >
        {children}
      </Sidebar>
      <Player />
    </>
  );
};

export default Layout;
