import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PokeDetails from './Pages/PokeDetails';

function App() {
 
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:name" element={<PokeDetails />} />
    </Routes>
  );
}

export default App;
