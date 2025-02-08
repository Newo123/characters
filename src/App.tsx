import { Route, Routes } from 'react-router';
import Character from './routes/character';
import Favorites from './routes/favorites';
import Home from './routes/home';
import Layout from './routes/layout';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/:page?' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/characters/:character' element={<Character />} />
			</Route>
		</Routes>
	);
}

export default App;
