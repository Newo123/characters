import { Route, Routes } from 'react-router';
import Character from './routes/character';
import Favorites from './routes/favorites';
import Home from './routes/home';

function App() {
	return (
		<Routes>
			<Route path='/:page?' element={<Home />} />
			<Route path='/favorites' element={<Favorites />} />
			<Route path='/characters/:character' element={<Character />} />
		</Routes>
	);
}

export default App;
