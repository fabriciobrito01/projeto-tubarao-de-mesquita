import Home from './pages/HomeTemp.jsx';
import InstitutoTubarao from './pages/InstitutoTubarao.jsx';
import HistoriaTubarao from './pages/HistoriaTubarao.jsx';
import FichaTecnica from './pages/FichaTecnicaTemp.jsx';
import Carnaval2022 from './pages/Carnaval2022.jsx';
import Carnaval2023 from './pages/Carnaval2023.jsx';
import Carnaval2024 from './pages/Carnaval2024.jsx';
import Carnaval2025 from './pages/Carnaval2025.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'; 
import ScrollToTop from "./components/ScrollToTop";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institutotubarao" element={<InstitutoTubarao />} />
          <Route path="/tubarao/historia" element={<HistoriaTubarao />} />
          <Route path="/tubarao/fichatecnica" element={<FichaTecnica />} />
          <Route path="/tubarao/carnaval2022" element={<Carnaval2022 />} />
          <Route path="/tubarao/carnaval2023" element={<Carnaval2023 />} />
          <Route path="/tubarao/carnaval2024" element={<Carnaval2024 />} />
          <Route path="/tubarao/carnaval2025" element={<Carnaval2025 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;