import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTask,
  removeTask,
  toggleChecked,
} from "./store/reducers/taskReducer";
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");

  const { data } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const onCheckboxChange = (id) => {
    dispatch(toggleChecked(id));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!taskInput.trim()) return;

    dispatch(
      addTask({
        id: data.length + 1,
        title: taskInput,
        checked: false,
      })
    );

    setTaskInput("");
  };

  const onClickRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="container">
      <div className="wrap-header">
        <div className="header">
          <h2 className="title">To Do List</h2>
          <form onSubmit={(e) => onSubmitForm(e)}>
            <input
              type="text"
              placeholder="Adicione uma tarefa"
              onChange={(e) => setTaskInput(e.target.value)}
              value={taskInput}
            />
            <button type="submit" title="Adicionar">
              <i className="bi bi-plus"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="wrap-content">
        <div className="content">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-content">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => onCheckboxChange(item.id)}
                  />
                  <span></span>
                </label>
                <div className="card-text">{item.title}</div>
              </div>
              <div className="icon" onClick={() => onClickRemoveTask(item.id)}>
                <i className="bi bi-trash3"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
