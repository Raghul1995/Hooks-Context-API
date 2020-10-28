import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext'

function NavBar() {
    const {books} =useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Here are the Books</h1>
    <p>Total no. of books: {books.length}</p>
        </div>
    )
}

export default NavBar

//useContext- gets the context component and looks for the provider, it also like the main class element from which we pass props and manipulate data. 