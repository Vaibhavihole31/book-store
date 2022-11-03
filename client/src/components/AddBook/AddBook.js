import React from 'react';
import './AddBook.css'
import headerImage from './header-img.png';

function AddBook() {
  return (
    <>
      <div className='container mt-5'>
        <div className=' card-add-book'>
        <div className='row'>
          <h2 className='text-center mt-3'>Add Your Favourit Book📚</h2>
          <div className='col-md-6'>
            <div className='mt-5 '>
              <img
                src={headerImage}
                alt=""
                className="book-image mx-auto d-block"
              />
            </div>
          </div>
          <div className='col-md-6 mt-3 '>
            <form>

              <div className="mb-3 mt-5" >
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder='Name'
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Author"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Description"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Price"
                />
              </div>
              <div className="mb-3">
                <input
                  type="phone"
                  className="form-control"
                  id="mobile"
                  placeholder="Image"
                />
              </div>
              <button className="addbook-page-btn w-100 mb-5" type="button">
                <i class="fa-solid fa-right-to-bracket"></i> Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AddBook