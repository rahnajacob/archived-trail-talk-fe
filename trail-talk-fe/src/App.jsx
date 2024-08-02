import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import SignUp from "./components/SignUp/SignUp"
import ShowPost from "./components/ShowPost/ShowPost"
import SearchBar from './components/SearchBar/SearchBar'
import RightBar from "./components/RightBar/RightBar"
import Footer from './components/Footer/Footer'
import Feed from "./components/Feed/Feed"
import CreateUpdatePost from './components/CreateUpdatePost/CreateUpdatePost'
import Carousel from './components/Carousel/Carousel'

const App = () => {

  return (
    <>
      <h1>Hullo world</h1>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}



export default App
