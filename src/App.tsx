
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactButtons from './components/ContactButtons';
import Footer from './components/Footer';
import WhatsAppPage from './pages/WhatsAppPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
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