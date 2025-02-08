import { ICharacter } from '@/types/character';
import axios from 'axios';
const $api = axios.create({
	baseURL: 'https://rickandmortyapi.com/api',
});

class CharackerService {
	async getAll(params: URLSearchParams): Promise<ICharacter> {
		return $api.get(`/character/?${params}`).then(response => response.data);
	}
	async getById(id: string) {
		return $api.get(`/character/${id}`).then(response => response.data);
	}
}

export const charackerService = new CharackerService();
