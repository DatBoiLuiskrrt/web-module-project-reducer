import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/index";
import "./App.css";
import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import {
  addOne,
  changeOperation,
  clearDisplay,
  setToCurrentValue,
  currentMemoryApplied,
  clearMemory,
} from "../actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const handleAddOneClick = () => {
    dispatch(addOne());
  };
  const handleChangeOperation = (e) => {
    dispatch(changeOperation(e.target.value));
  };
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };
  const handleSetToCurrentValue = () => {
    dispatch(setToCurrentValue());
    // console.log(e);
  };
  const handleCurrentMemoryApplied = () => {
    dispatch(currentMemoryApplied());
  };
  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetToCurrentValue} />
              <CalcButton value={"MR"} onClick={handleCurrentMemoryApplied} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleAddOneClick} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleChangeOperation} />
              <CalcButton value={"*"} onClick={handleChangeOperation} />
              <CalcButton value={"-"} onClick={handleChangeOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
