import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/footer';
import { Home } from './components/pages/home';
import { PageDeparture } from './components/pages/pageDeparture';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <Routes>
            {/* La route pour l'accueil */}
            <Route path="/" element={<Home />} />
            {/* La route pour ta page Departure spécifique */}
            <Route path="/departure" element={<PageDeparture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;