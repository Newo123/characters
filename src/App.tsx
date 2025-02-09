import { Route, Routes } from 'react-router';
import Character from './routes/character';
import Favorites from './routes/favorites';
import Home from './routes/home';
import Layout from './routes/layout';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/character/:character' element={<Character />} />
			</Route>
		</Routes>
	);
}

export default App;
