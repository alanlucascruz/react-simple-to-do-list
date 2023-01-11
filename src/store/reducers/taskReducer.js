import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    data: [
      {
        id: 1,
        title: "Backend com Node.JS",
        checked: true,
      },
      {
        id: 2,
        title: "Projeção de Rotas da API",
        checked: true,
      },
      {
        id: 3,
        title: "Modelo de Usuários",
        checked: false,
      },
      {
        id: 4,
        title: "Controlador de Usuários",
        checked: false,
      },
      {
        id: 5,
        title: "Database com MongoDB",
        checked: false,
      },
      {
        id: 6,
        title: "Frontend com ReactJS",
        checked: false,
      },
      {
        id: 7,
        title: "Projetar Rotas do Navegador",
        checked: false,
      },
      {
        id: 8,
        title: "UI/UX Design",
        checked: false,
      },
      {
        id: 9,
        title: "Conectar com Redux",
        checked: false,
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    toggleChecked: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload);

      const item = state.data[index];

      state.data[index] = {
        ...item,
        checked: !item.checked,
      };
    },
    removeTask: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload);

      state.data.splice(index, 1);
    },
  },
});

export const { addTask, toggleChecked, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
