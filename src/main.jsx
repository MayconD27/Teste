import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Home } from './components/Home';
import { Error } from './components/Error';
import { Menu } from './components/Menu';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Contact } from './components/Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>} ></Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
