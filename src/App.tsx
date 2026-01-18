import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Changement vers HashRouter
import { useEffect } from 'react';
import { Navbar } from './components/home_sections/Navbar';
import { Footer } from './components/home_sections/footer';
import { Portfolio } from './components/pages/Portfolio';
import { Departure } from './components/pages/Departure';

// Composant pour forcer le retour en haut de page lors d'un changement de route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* ScrollToTop règle le problème du site qui s'ouvre au milieu ou au footer */}
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <Routes>
            {/* Avec HashRouter, tes URLs ressembleront à : ton-site/#/ et ton-site/#/departure */}
            <Route path="/" element={<Portfolio />} />
            <Route path="/departure" element={<Departure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;