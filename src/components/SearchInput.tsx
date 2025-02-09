import { Input } from '@/components/ui/input';
import { SearchInputProps } from '@/types/search';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export function SearchInput({ value, onChange, onSearch }: SearchInputProps) {
	const searchSubject = useRef(new Subject<string>());

	useEffect(() => {
		const subscription = searchSubject.current
			.pipe(debounceTime(700), distinctUntilChanged())
			.subscribe(onChange);

		return () => subscription.unsubscribe();
	}, [onChange]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(e.target.value);
		searchSubject.current.next(e.target.value);
	};

	return (
		<Input
			type='text'
			value={value}
			onChange={handleInputChange}
			placeholder='Поиск персонажей...'
			className='w-full'
		/>
	);
}
