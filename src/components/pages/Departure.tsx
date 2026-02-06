import { Navbar } from "../departure_sections/Navbar";
import { Accueil } from "../departure_sections/Accueil";
import { Synopsis } from "../departure_sections/Synopsis";
import { Personnages } from "../departure_sections/personnages";
import { Footer } from "../departure_sections/footer";
import { RenPy } from "../departure_sections/renpy";

export const Departure = () => {
  return (
    <>
      <Navbar />
      <Accueil />
      <Synopsis />
      <Personnages />
      <RenPy />
      <Footer />
    </>
  );
};