import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Nav from './Nav';
import Gallery from './Gallery';
import Upload from './Upload';
import Dashboard from './Dashboard';


function App() {

  return (
            <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/nav" element={<Nav/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

         </Routes>

       </BrowserRouter>

  )
}

export default App
