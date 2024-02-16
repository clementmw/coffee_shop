import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
