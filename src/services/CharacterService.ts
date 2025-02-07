import axios from 'axios';
const $api = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
});

class CharackerService {
	async getAll() {
		return $api.get('/character').then(response => response.data);
	}
	async getById(id: string) {}
}

export const charackerService = new CharackerService();
