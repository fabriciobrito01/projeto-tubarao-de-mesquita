import Home from './pages/home.jsx';
import InstitutoTubarao from './pages/InstitutoTubarao.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'; 
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institutotubarao" element={<InstitutoTubarao />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;