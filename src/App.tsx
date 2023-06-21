import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/page';
import Search from './pages/search/page';
import Playlist from './pages/playlist/page';

const App = () => {
	return (
		<Router>
			<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search/>} />
						<Route path="/playlist/" element={<Playlist/>} />
						<Route path="/playlist/:key" element={<Playlist/>} />
					</Routes>
			</Layout>
		</Router>
	);
};

export default App;
