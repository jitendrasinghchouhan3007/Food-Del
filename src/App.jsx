import React, { use, useState } from 'react'
import Navbar from './Components/Navbar2';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Cart from './pages/Cart/cart';
import Placeorder from './pages/PlaceOrder/placeorder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return(
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar  setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App
