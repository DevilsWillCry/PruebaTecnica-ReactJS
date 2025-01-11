import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { agregarFormulario } from "../redux/formSlice";
import { useDispatch } from "react-redux";

const Formulario = () => {

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .required("El nombre es obligatorio"),
    correo: Yup.string()
      .email("Correo inválido")
      .required("El correo es obligatorio"),
    mensaje: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .required("El mensaje es obligatorio"),
  });

  const enviarFormulario = async (values) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        values
      );
      dispatch(agregarFormulario(values));
      alert(
        "Formulario enviado correctamente."
      );
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <Formik
      initialValues={{ nombre: "", correo: "", mensaje: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        enviarFormulario(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>Formulario</h1>
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" name="nombre" id="nombre" />
            <ErrorMessage
              name="nombre"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Campo Correo */}
          <div>
            <label htmlFor="correo">Correo Electrónico:</label>
            <Field type="email" name="correo" id="correo" />
            <ErrorMessage
              name="correo"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Campo Mensaje */}
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <Field as="textarea" name="mensaje" id="mensaje" rows="4" />
            <ErrorMessage
              name="mensaje"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          {/* Botón de Enviar */}
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
