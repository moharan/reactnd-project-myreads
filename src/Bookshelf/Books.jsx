import React from 'react'
import Select from './Select'

function Books (props) {
    return (
      <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${props.backgroundImage}` }}></div>
        <div className="book-shelf-changer">
          <Select />
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
    )
}

export default Books