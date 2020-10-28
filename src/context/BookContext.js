import React, {createContext, useState} from "react"
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();


function BookContextProvider(props) {
const [books, setBooks] = useState([
    {title: "Angels and Demons", author: "Dan Brown", id: 1},
    {title: "The Da Vinci Code", author: "Dan Brown", id: 2}
])
const addBooks=(title, author)=>{ 
    setBooks([...books, {title, author, id: uuidv4()}])
}
const delBooks =(id)=>{
    setBooks(books.filter(book=>book.id !== id))

}

    return (
        <div>
            <BookContext.Provider value={{books, addBooks, delBooks}}>
                {props.children} {/*this represnts the component that "BookContextProvider" wraps*/}
            </BookContext.Provider>
            
        </div>
    )
}

export default BookContextProvider

