import React from 'react'
import Books from './Books'

function CurrentlyReading (props) {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map(function(book) {
              if (book.shelf === 'currentlyReading')
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

export default CurrentlyReading
