import axios from 'axios';
import React, { useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import LogoutNavbar from './LogoutNavbar';

function DitelsBooks() {
    const [data, setData] = React.useState([]);
const {title} = useParams();
console.log(title);

    useEffect(() => {

        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FpZq5vGOqcWm8ndH5FNYThbCViy3EEZv`).then((res) => {
            console.log(res.data);
          setData(res.data);
        });
    }, []);



    return (

        <div>

            <LogoutNavbar></LogoutNavbar>
          
          {data.results && data.results.books.map((item) => {

            if (item.title === title ) {
              return (
               
                <div className="flex justify-center items-center ">
                <div className='border-2 rounded-xl shadow-xl border-gray-700 w-96 flex flex-col mt-7 p-9 bg-gray-50  ' key={item.id}>
                  <img className="rounded-full " src={item.book_image} />
                  <p className='text-lg font-bold font-serif '>{item.author}</p>
                  <p className='text-lg  font-serif '> {item.description}</p>
                  <p className='text-lg  font-serif '> {item.contributor}</p>
                  <p className='text-lg  font-serif text-gray-500'>{item.price}</p>
                </div>
                </div>
              );
            } 
            return null;
          })}
            </div>
      );
    }

export default DitelsBooks;

