import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   <div>
  
  <BrowserRouter> 
 
 <Navbar/>
<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/projects' element={<Projects/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>

</Routes>
<Footer/>
</BrowserRouter>
  
   </div>
  );
}

export default App;
