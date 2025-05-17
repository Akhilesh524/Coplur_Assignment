import { Routes, Route } from 'react-router-dom';

import Register from './pages/Register';

import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
   
    </>
    
  );
}

export default App;

