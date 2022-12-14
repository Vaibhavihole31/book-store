import React from 'react'
import './Book.css'

function Book(props) {
  return (
    <div className="book-card mb-5">
      <div className="row">
        <div className="col-md-12">
          <img className='book-img' src={props.image}/>
          <h5 className='mt-3'>Name: {props.name}</h5>
          <h6>Author: {props.author}</h6>
          <h6>Description: {props.description}</h6>
          <h6>price: {props.price}</h6>
          <button className='btn-delete'><b>Delete</b></button>
          <button className='btn-update'><b>Update</b></button>
        </div>
      </div>
    </div>
  )
}

export default Book
