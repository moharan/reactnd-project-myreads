import React from 'react'
import Books from './Books'

function Read (props) {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {props.books.map(function(book) {
          if (book.shelf === 'read')
            return (
            <li key={book.title}>
              <Books
                title={book.title}
                authors={book.authors}
                backgroundImage={`url(${book.imageLinks.smallThumbnail})`}
              />
            </li>
          )})}
        </ol>
      </div>
    </div>
    )
}

export default Read
