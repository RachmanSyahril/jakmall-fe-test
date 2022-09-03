import { CHANGE_CURRENT_STEP } from "./constants";

export const setCurrentStep = (step) => ({ type: CHANGE_CURRENT_STEP, payload: step })
