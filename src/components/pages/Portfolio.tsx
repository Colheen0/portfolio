// src/pages/Home.tsx
import { Navbar } from '../home_sections/Navbar';
import { Accueil } from '../home_sections/Accueil';
import { Moi } from '../home_sections/Moi';
import { Competences } from '../home_sections/Competences_passions/competences';
import { Passions } from '../home_sections/Competences_passions/passions';
import { Departure as DepartureSection } from '../home_sections/Departure'; // La petite section "teaser"
import { MarneEtGondoire } from '../home_sections/Experiences/MarneEtGondoire';
import { CMJ } from '../home_sections/Experiences/CMJ';
import { Scholar } from '../home_sections/Projects/Scholar';
import { Footer } from '../home_sections/footer';
import { Other } from '../home_sections/Projects/Other/Other';

export const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Accueil />
      <Moi />
      <Competences />
      <DepartureSection />
      <MarneEtGondoire />
      <CMJ />
      <Scholar />
      <Other />
      <Passions />
      <Footer />
    </>
  );
};