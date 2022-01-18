export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_TO_CURRENT_VALUE = "SET_TO_CURRENT_VALUE";
export const CURRENT_MEMORY_APPLIED = "CURRENT_MEMORY_APPLIED";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const addOne = () => {
  return { type: ADD_ONE };
};
export const changeOperation = (value) => {
  return { type: CHANGE_OPERATION, payload: value };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const clearDisplay = () => {
  return {
    type: CLEAR_DISPLAY,
  };
};

export const setToCurrentValue = () => {
  return {
    type: SET_TO_CURRENT_VALUE,
  };
};

export const currentMemoryApplied = () => {
  return {
    type: CURRENT_MEMORY_APPLIED,
  };
};

export const clearMemory = () => {
  return {
    type: CLEAR_MEMORY,
  };
};
