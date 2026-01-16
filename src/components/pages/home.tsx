// src/pages/Home.tsx
import { Accueil } from '../Accueil';
import { Moi } from '../Moi';
import { Competences } from '../Competences_passions/competences';
import { Passions } from '../Competences_passions/passions';
import { Departure as DepartureSection } from '../Departure'; // La petite section "teaser"
import { MarneEtGondoire } from '../Experiences/MarneEtGondoire';
import { CMJ } from '../Experiences/CMJ';
import { Scholar } from '../Projects/Scholar';
import { Other } from '../Projects/Other';

export const Home = () => {
  return (
    <>
      <Accueil />
      <Moi />
      <Competences />
      <Passions />
      <DepartureSection />
      <MarneEtGondoire />
      <CMJ />
      <Scholar />
      <Other />
    </>
  );
};