import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
import LogoutNavbar from './LogoutNavbar';
function BookLibrary() {
const [data , setData] = React.useState([])

const [searchQuery, setSearchQuery] = React.useState('');
const [filteredInfo, setFilteredInfo] = React.useState([]);

const handleInputChange = (event) => {
  setSearchQuery(event.target.value);
}
const handleSearch = () => {
  const query = searchQuery.toLowerCase();
  if (query === '') {
    setFilteredInfo([]);
    return;
  }

  const filteredData = data.results?.books.filter(
    (item) =>
      item.title.toLowerCase().includes(query)
  );

  setFilteredInfo(filteredData || []);
  console.log(filteredData);
  console.log(setFilteredInfo);
};

     React.useEffect(()=>{
         axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FpZq5vGOqcWm8ndH5FNYThbCViy3EEZv')
         .then((res) => {
            console.log(res.data);
            
          setData(res.data);

        });
    }, []);


    const displayBooks = ()=>{
        
    }
    const addToFavorites = (book) => {

        const name = localStorage.getItem('username' );
        const id = localStorage.getItem('id');
        console.log(book.title);
        axios.get(`https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael/${id}`)
          .then((res) => {
            const existingFavorites = res.data.bookTitle || [];
            const updatedFavorites = [...existingFavorites, book.title];
            const updateImage = [...existingFavorites, book.book_image];
            

            console.log(existingFavorites);
            console.log(updatedFavorites);

            return axios.put(`https://655270245c69a779032a08a1.mockapi.io/api/signup/mashael/${id}`, {
              bookTitle: updatedFavorites,
              bookimage:updateImage

            });
          })
          .then((res) => {
            console.log(res.data);
          })

      };

const handelChange = (book)=>(event) =>{
console.log(event.target.value);
if(event.target.value === "Read" ){
} 

else if (event.target.value === "Favourite" ){
    addToFavorites(book)
    }
}

const booksToDisplay = searchQuery !== '' ? filteredInfo : data.results?.books;
return (
  <>
    <LogoutNavbar />
    <div>
      <div>
       
        <input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          className="border border-gray-900 p-1 shadow-2xl ml-96 mt-9 m-5 max-sm:w-30 max-sm:ml-16 rounded-lg  "
          placeholder="Search"/>

        <button
          onClick={handleSearch}
          className="bg-gray-900 text-white p-1 shadow-lg rounded-lg"
        >
          Search
        </button>
        <div className='flex gap-10 flex-wrap justify-center items-center '>
        {data.results && booksToDisplay.map((item) => (
          <div key={item.title}>

            <div className='flex flex-col gap-4'>
            <h1 className='font-sans text-center font-semibold'>{item.title}</h1>
            <Link to={`/DitelsBooks/${item.title}`}>
              <img  className="rounded-xl"src={item.book_image} alt=""/>
            </Link>
            <label htmlFor="actionSelect">Choose:</label>
            <select
              onChange={handelChange(item)}
              className="bg-[#BEA98E] w-40 h-10 rounded-md "
              name="actionSelect" >
              <option value="Selector">Select Option</option>
              <option value="Read">Read</option>
              <option value="Favourite">Favourite</option>
            </select>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </>
);
}

export default BookLibrary