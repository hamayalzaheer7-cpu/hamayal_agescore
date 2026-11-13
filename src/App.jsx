
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Capabilities from "./sections/Capabilities";
import Benchmark from "./sections/Benchmark";
import CaseStudies from "./sections/CaseStudies";
import Form from "./sections/Form";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Capabilities />
      <Benchmark />
      <CaseStudies />
      <Form />
      <Footer />
    </>
  );
}

export default App;
