import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext'

function BookDetails({book}) { //destructuting the book as a prop from "BookList.js"
    const {delBooks} = useContext(BookContext) // getting the delBooks from the BookContext
    return (
        <li  onClick={()=> delBooks(book.id)}> {/* delete function */}
            <div className="author">{book.author}</div>
            <div className="title">{book.title}</div>
        </li>
    )
}

export default BookDetails
