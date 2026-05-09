import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroEnhanced from './components/Hero';
import Body from './components/Body';
import ProductCarousel from './components/ProductCarousel';
import Testimonials from './components/Testimonials';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';
import WhatsAppPage from './pages/WhatsAppPage';
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
      {/* Barra de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F7B150] to-[#0F69B2] z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroEnhanced />
              <Body />
              <ProductCarousel />
              <Testimonials />
              <ContactButtons />
              <Footer />
            </>
          } />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;