import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaFormularios from "./components/listaFormularios";
import "./App.css";

function App() {
  return (
    <>
      <Formulario />
      <ListaFormularios />
    </>
  );
}

export default App;
