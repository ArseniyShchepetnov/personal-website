import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../scss/custom.scss";
import Navigation from "../components/header";
import Home from "../components/home";
import CareerSection from "../components/employment"; // Updated import
import TechStack from "../components/techstack";
import Contacts from "../components/contacts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-bg-dark d-flex flex-column justify-content-space-between">
      <Navigation />
      <section id="home"></section>
      <Home />

      <section id="stack"></section>
      <TechStack />

      <section id="career"></section>
      <CareerSection /> {/* Updated component usage */}



      <section id="contacts"></section>
      <Contacts />

    </div>
  );
}

export default MyApp;