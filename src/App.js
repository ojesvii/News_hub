import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import Fetchdata from './components/Fetchdata'


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/general" element={<Fetchdata cat="general"/>} ></Route>
      <Route exact path="/business" element={<Fetchdata cat="business"/>} ></Route>
      <Route exact path="/entertainment" element={<Fetchdata cat="entertainment"/>} ></Route>
      <Route exact path="/health" element={<Fetchdata cat="health"/>} ></Route>
      <Route exact path="/science" element={<Fetchdata cat="science"/>} ></Route>
      <Route exact path="/sports" element={<Fetchdata cat="sports"/>} ></Route>
      <Route exact path="/technology" element={<Fetchdata cat="technology"/>} ></Route>
    
    </Routes>
    </Router>
    
    </>
  )
}

export default App