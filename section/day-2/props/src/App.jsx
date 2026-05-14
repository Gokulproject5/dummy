import { createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export const api = createContext();

 
function App() {
  const info = [
    { id: 1, skill: "HTML", color: "bg-blue-500", ratio: 80 },
    { id: 2, skill: "CSS", color: "bg-red-500", ratio: 70 },
    { id: 3, skill: "JAVASCRIPT", color: "bg-yellow-500", ratio: 80 },
    { id: 4, skill: "REACT", color: "bg-green-500", ratio: "70" },
  ];

   
  return (
    <>
      <api.Provider value={[info]}>
        <div className=" max-w-6xl mx-auto">
          <Header user= "Gokul" />
          <Home />
          <Skill />
          <Contact />
          <Footer user="Gokul" />
        </div>
      </api.Provider>
    </>
  );
}

export default App;
