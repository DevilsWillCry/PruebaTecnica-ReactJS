import { configureStore } from  '@reduxjs/toolkit';;
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    form: formReducer, // Reducer del formulario
  },
});

export default store;
