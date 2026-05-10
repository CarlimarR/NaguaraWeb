import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import ProductCarousel from './components/ProductCarousel';
import Testimonials from './components/Testimonials';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';
import WhatsAppPage from './pages/WhatsAppPage';
import FullCatalog from './pages/FullCatalog';
import TermosTazas from './pages/catalogo/TermosTazas';
import Textil from './pages/catalogo/Textil';
import Papeleria from './pages/catalogo/Papeleria';
import Stickers from './pages/catalogo/Stickers';
import GranFormato from './pages/catalogo/GranFormato';
import Diseno from './pages/catalogo/Diseno';
import Llaveros from './pages/catalogo/Llaveros';
import KitsCorporativos from './pages/catalogo/KitsCorporativos';
import Otros from './pages/catalogo/Otros';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F7B150] to-[#0F69B2] z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Body />
              <ProductCarousel />
              <Testimonials />
              <ContactButtons />
              <Footer />
            </>
          } />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="/catalogo" element={
            <>
              <Header />
              <FullCatalog />
              <Footer />
            </>
          } />
          {/* Rutas de categorías */}
          <Route path="/catalogo/termos-tazas" element={<><Header /><TermosTazas /><Footer /></>} />
          <Route path="/catalogo/textil" element={<><Header /><Textil /><Footer /></>} />
          <Route path="/catalogo/papeleria" element={<><Header /><Papeleria /><Footer /></>} />
          <Route path="/catalogo/stickers" element={<><Header /><Stickers /><Footer /></>} />
          <Route path="/catalogo/gran-formato" element={<><Header /><GranFormato /><Footer /></>} />
          <Route path="/catalogo/diseno" element={<><Header /><Diseno /><Footer /></>} />
          <Route path="/catalogo/llaveros" element={<><Header /><Llaveros /><Footer /></>} />
          <Route path="/catalogo/kits" element={<><Header /><KitsCorporativos /><Footer /></>} />
          <Route path="/catalogo/otros" element={<><Header /><Otros /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;