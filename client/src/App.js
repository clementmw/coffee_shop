import { Route, Routes } from 'react-router-dom';
import './output.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Purchase from './components/Purchase';
import Navbar from './components/Navbar';
import About from './components/About';
import Review from './components/Review';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Footer/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/review" element={<Review/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
