import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../scss/custom.scss";
import Header from "../components/header";
import Home from "../components/home";
import EmploymentHistory from "../components/experience";
import TechStack from "../components/techstack";
import Education from "../components/education";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-bg-dark d-flex flex-column justify-content-space-between">
      <Header />
      <section id="home"></section>
      <Home />
      <section id="stack"></section>
      <TechStack />
      <section id="experience"></section>
      <EmploymentHistory />
      <section id="education"></section>
      <Education />
    </div>
  );
}

export default MyApp;
