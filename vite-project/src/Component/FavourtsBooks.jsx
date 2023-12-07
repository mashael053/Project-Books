
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutNavbar from './LogoutNavbar';

const FavourtsBooks = () => {
  const [favorites, setFavorites] = useState([]);
  const [images , setImages] = useState([])

  useEffect(() => {
    const id = localStorage.getItem('id');

    axios.get(`https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael/${id}`)
      .then((res) => {
        ;
        setFavorites(res.data.bookTitle);
        console.log(res.data.bookTitle);
        setFavorites(res.data.bookimage)
      })

  }, []);

  return (
    <div>
      <LogoutNavbar></LogoutNavbar>
<h1 className='text-center mt-20 font-light text-5xl'>Favorite Books</h1>

      {favorites.length > 0 ? (
        <ul>
          {favorites.map((book) => (
            <div>

               <img src={book.book_image} alt="" srcset="" />
            <li key={book.title}>{book}</li>

            </div>
           
          ))}
        </ul>
      ) : (
        <p className='text-center text-xl'>No favorite books found.</p>
      )}
    </div>
  );
};

export default FavourtsBooks;



