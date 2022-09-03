import { CHANGE_CURRENT_STEP } from "./constants";

const initialStateStep = {
  currentStep: 1,
};

export const stepReducer = (state = initialStateStep, action = {}) => {
  switch (action.type) {
    case CHANGE_CURRENT_STEP:
      return Object.assign({}, state, { currentStep: action.payload });
    default:
      return state;
  }
};
