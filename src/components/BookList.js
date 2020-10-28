import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from "./BookDetails"

function BookList() {
	const { books } = useContext(BookContext);
	return books.length ? ( //conditional operator which outputs the below
		<div className="book-list">
            <ul>
			{books.map((book) => {
				return <BookDetails book={book} key={book.id} />; // since we use values in BookDetails.js he, we need to destrucutre it properly in its own component 
			})}
            </ul>
		</div>
	) : (
		<div className="empty">Nothing to see here</div>
	);
}

export default BookList;
