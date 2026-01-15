import { Navbar } from './components/Navbar';
import { Moi } from './components/Moi';
import { Accueil } from './components/Accueil';
import { Competences } from './components/Competences_passions/competences';
import { Passions } from './components/Competences_passions/passions';
import { Departure } from './components/Departure';
import { MarneEtGondoire } from './components/Experiences/MarneEtGondoire';
import { CMJ } from './components/Experiences/CMJ';
import { Scholar } from './components/Projects/Scholar';
import { Other } from './components/Projects/Other';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      <Navbar />
      <main>
        <Accueil />
        <Moi />
        <Competences />
        <Passions />
        <Departure />
        <MarneEtGondoire />
        <CMJ />
        <Scholar />
        <Other />
      </main>
      <Footer />
    </div>
  );
}

export default App;