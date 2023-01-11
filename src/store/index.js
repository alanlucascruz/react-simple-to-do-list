import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
