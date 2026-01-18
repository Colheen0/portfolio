import { Navbar } from "../departure_sections/Navbar";
import { Accueil } from "../departure_sections/Accueil";
import { Synopsis } from "../departure_sections/Synopsis";
import { Personnages } from "../departure_sections/personnages";

export const Departure = () => {
  return (
    <>
      <Navbar />
      <Accueil />
      <Synopsis />
      <Personnages />
    </>
  );
};