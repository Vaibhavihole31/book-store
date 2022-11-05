// import axios from "axios"
// import {useState, useEffect} from "react";
// import "./Home.css"
// import Book from './../Book/Book';

// function Home() {
  
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     async function fetchData(){
//       const response =await axios.get('/book')
//       setBooks(response.data)
//      console.log(response.data)
//     }
//     fetchData();
//   },[])


//   books && books.map((book, i) => {
//     return (
//       <>
//       <Book 
//       key = {i}
//       image = {book.image}
//       name={book.name}
//       author={book.author}
//       description={book.description} 
//       price={book.price}
//       />
//       </>
//     )
//   })
// }

// export default Home

import React from 'react';
import Book from './../Book/Book';
import axios from 'axios';
import {useState, useEffect} from 'react';


export default function Home() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/book').then(res => {
      setBooks(res.data);
      console.log(res.data);
    })
  },[])

  return (
       <>
          <div className='abc'>
         <div className='container' >
       <h1 className="text-center card-title mt-5">Choose Your Favourite Book 📚💙</h1>
       <hr/>
       <div className='row'>
         {
            books && books.map((book, i) => {
                  return (
                    <>
                    <Book 
                    key = {i}
                    image = {book.image}
                    name={book.name}
                    author={book.author}
                    description={book.description} 
                    price={book.price}
                    />
                    </>
                  )
                })
         }
         </div>
       </div>
       </div>
    </>
  )
}
