import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

function NwBookForm() {
	const { addBooks } = useContext(BookContext);
	const [ author, setAuthor ] = useState('');
	const [ title, setTitle ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addBooks(title, author);
		setTitle('');
		setAuthor('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Author"
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
				required
			/>
			<input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
			<input type="submit" value="Add book" />
		</form>
	);
}

export default NwBookForm;
