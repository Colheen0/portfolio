import { Navbar } from './components/Navbar';
import { Moi } from './components/Moi';
import { Accueil } from './components/Accueil';
import { Departure } from './components/Departure';
import { MarneEtGondoire } from './components/Experiences/MarneEtGondoire';
import { ProjectsGrid } from './components/GridProjects';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Navbar />
      <main>
        <Accueil />
        <Moi />
        <Departure />
        <MarneEtGondoire />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;