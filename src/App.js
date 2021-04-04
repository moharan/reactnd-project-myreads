import React from 'react'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './Bookshelf/CurrentlyReading'
import WantToRead from './Bookshelf/WantToRead'
import Read from './Bookshelf/Read'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route exact path='/search' render={() => (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          )} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books}/>
                <WantToRead books={this.state.books}/>
                <Read books={this.state.books}/>
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'  onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
