import React from "react";
import "./App.css";
import { Garagem } from "./Componentes/Garagem";
import { Header } from "./Componentes/Header";
import { Footer } from "./Componentes/Footer";

export default function App() {
  

  return (
    <div className="App">
      
     <h1>Aula - Componentes React</h1>
      <div>
        <Header/>
        <Garagem/>
        <Footer/>
      </div>

    </div>
  );
}
