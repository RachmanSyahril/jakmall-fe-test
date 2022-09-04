import { CHANGE_CURRENT_STEP, SELECT_PAYMENT_METHOD, SELECT_SHIPMENT_METHOD } from "./constants";

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

const initialStateShipment = {
  shipment: {}
}

export const shipmentReducer = (state = initialStateShipment, action = {}) => {
  switch (action.type) {
    case SELECT_SHIPMENT_METHOD:
      return Object.assign({}, state, { shipment: action.payload });
    default:
      return state;
  }
};

const initialStatePayment = {
  payment: {}
}

export const paymentReducer = (state = initialStatePayment, action = {}) => {
  switch (action.type) {
    case SELECT_PAYMENT_METHOD:
      return Object.assign({}, state, { payment: action.payload });
    default:
      return state;
  }
};