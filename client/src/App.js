import { Route, Routes } from 'react-router-dom';
import './input.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Purchase from './components/Purchase';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Footer/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
