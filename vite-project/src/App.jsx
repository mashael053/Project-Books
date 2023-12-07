import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import BookLibrary from './Component/BookLibrary'
import DitelsBooks from './Component/DitelsBooks'
import FavourtsBooks from './Component/FavourtsBooks'
import DisplayBook from './Component/DisplayBook'
import Footer from './Component/Footer'


function App() {

  return (
    <>

<Routes>
  <Route path='/' element={<Homepage/>}></Route>
  <Route path='/SignUp' element={<SignUp/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  <Route path='/BookLibrary' element={<BookLibrary/>}></Route>
  <Route path='/DitelsBooks/:title' element={<DitelsBooks/>}></Route>
  <Route path='/FavourtsBooks' element={<FavourtsBooks/>}></Route>
  <Route path='/DisplayBook' element={<DisplayBook/>}></Route>

</Routes>
<Footer></Footer>
    </>
  )
}

export default App
