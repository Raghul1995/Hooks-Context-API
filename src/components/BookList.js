import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from "./BookDetails"

function BookList() {
	const { books } = useContext(BookContext);
	return books.length ? ( //conditional operator which outputs the below
		<div className="book-list">
			{books.map((book) => {
				return <BookDetails book={book} key={book.id} />;
			})}
		</div>
	) : (
		<div className="empty">Nothing to see here</div>
	);
}

export default BookList;
