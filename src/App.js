import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Contact from './components/Contact';
import Home from './components/Home';
import { useState } from 'react';



// let name = prompt("Enter your name")
function App() {

  const [mode, setMode] = useState('light');

  const toggleMode= ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= 'rgb(61, 2, 28)';
      document.body.style.color= 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar  title='Text Utilities' mode={mode} toggleMode={toggleMode} />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<h1 className='container my-3'>404 Error <br/> Page Not Found</h1>} />
      </Routes> */}
    {/* </Router> */}
    <Home />
{/* <Navbar  title='Text Utilities' />
<div className="container mt-3">
  <About />
</div> */}
    </>
  );
}

export default App;
