import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
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
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/propiedades" element={<Properties />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/propiedades/:id" element={<PropertyDetails />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
