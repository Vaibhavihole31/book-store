import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'
import headerImage from './header-img.png';
import swal from "sweetalert";
import {useNavigate} from 'react-router-dom';

function AddBook() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function addBook() {
    const response = await axios.post('/book', {
      name: name,
      author: author,
      description: description,
      price: price,
      image: image
    })

    if(response.data.success)
    {
      swal("Book Added Successfully!!");
      navigate('/');
    }
    else{
      swal("Invalid Credientials")
    }

    setName("");
    setAuthor("");
    setAuthor("");
    setPrice("");
    setImage("");

  }

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
                  id="Name"
                  placeholder='Name'
                  value={name} onChange={(e) => { setName(e.target.value) }}
                />
              </div>
               <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                  value={author} onChange={(e) => { setAuthor(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description"
                  value={description} onChange={(e) =>{ setDescription(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="Price"
                  value={price} onChange={(e) =>{ setPrice(e.target.value) }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image"
                  value={image} onChange={(e) => { setImage(e.target.value) }}
                />
              </div>
              <button className="addbook-page-btn w-100 mb-5" type="button" onClick={addBook}>
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