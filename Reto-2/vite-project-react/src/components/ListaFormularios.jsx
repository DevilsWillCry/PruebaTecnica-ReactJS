// src/components/VentanaDesplegable.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListaFormularios = () => {

  const [abierto, setAbierto] = useState(false);
  const formularios = useSelector((state) => state.form.formularios);
  console.log(formularios);

  const toggleVentana = () => {
    setAbierto(!abierto);
  };

  return (
    <div id="ListForm">
      <button onClick={toggleVentana}>
        {abierto ? "Cerrar Formularios" : "Ver Formularios"}
      </button>

      {abierto && (
        <div className="ventana-desplegable">
          <h3>Formularios Enviados</h3>
          {formularios.length > 0 ? (
            <ul>
              {formularios.map((formulario, index) => (
                <li className="oneForm" key={index}>
                  <strong>Nombre:</strong> {formulario.nombre} <br />
                  <strong>Correo:</strong> {formulario.correo} <br />
                  <strong>Mensaje:</strong> {formulario.mensaje} <br />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay formularios enviados.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListaFormularios;
