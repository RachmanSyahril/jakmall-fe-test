import {
  CHANGE_CURRENT_STEP,
  SELECT_SHIPMENT_METHOD,
  SELECT_PAYMENT_METHOD,
} from "./constants";

export const setCurrentStep = (step) => ({
  type: CHANGE_CURRENT_STEP,
  payload: step,
});

export const setShipmentMethod = (payload) => ({
  type: SELECT_SHIPMENT_METHOD,
  payload,
});

export const setPaymentMethod = (payload) => ({
  type: SELECT_PAYMENT_METHOD,
  payload,
});
