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
						<Route path="/" exact Component={Home} />
						<Route path="/search" Component={Search} />
						<Route path="/playlist/" exact Component={Playlist} />
						<Route path="/playlist/:key" Component={Playlist} />
					</Routes>
			</Layout>
		</Router>
	);
};

export default App;
