import { createSlice } from  '@reduxjs/toolkit';

// Inicializar el estado inciial.
const initialState = {
  formularios: [],
};

// Crear el slice
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    agregarFormulario: (state, action) => {
      state.formularios.push(action.payload);
    },
  },
});

// Exportar acciones y reducer
export const { agregarFormulario } = formSlice.actions;
export default formSlice.reducer;
