import Home from './pages/Home.jsx';
import InstitutoTubarao from './pages/InstitutoTubarao.jsx';
import HistoriaTubarao from './pages/HistoriaTubarao.jsx';
import FichaTecnica from './pages/FichaTecnica.jsx';
import Enredo2022 from './pages/Enredo2022.jsx';
import Enredo2023 from './pages/Enredo2023.jsx';
import Enredo2024 from './pages/Enredo2024.jsx';
import Enredo2025 from './pages/Enredo2025.jsx';
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
          <Route path="/tubarao/historia" element={<HistoriaTubarao />} />
          <Route path="/tubarao/fichatecnica" element={<FichaTecnica />} />
          <Route path="/tubarao/enredo2022" element={<Enredo2022 />} />
          <Route path="/tubarao/enredo2023" element={<Enredo2023 />} />
          <Route path="/tubarao/enredo2024" element={<Enredo2024 />} />
          <Route path="/tubarao/enredo2025" element={<Enredo2025 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;