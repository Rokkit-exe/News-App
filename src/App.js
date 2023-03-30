import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import Forex from './pages/Forex';
import Stock from './pages/Stock';
import Crypto from './pages/Crypto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/forex' element={<Forex/>}/>
        <Route path='/stock' element={<Stock/>}/>
        <Route path='/crypto' element={<Crypto/>}/>
      </Routes>
    </Router>
  );
}

export default App;
