import { Suspense, useEffect, useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [lng, setLng] = useState("es");

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data[lng]);
      });
  }, [lng]);

  return (
    <Suspense fallback={null} className="App">
      <Header data={resumeData.main} lng={setLng} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </Suspense>
  );
};

export default App;
