import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetail';

function App() {
  return (
    <>
      <Navbar />
      {/* Remove Container to allow full-bleed content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/propiedades" element={<Properties />} />
        <Route path="/venta" element={<Properties />} />
        <Route path="/renta" element={<Properties />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/propiedades/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
