import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { colorPrimary, colorAccent } from "../../assets/styles/app-theme";
import { TxRegular, TxBold, TxSuccess } from "../../assets/styles/typography";

const Summary = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-left: 1px solid ${colorPrimary};
  min-height: 538px;
`;

const SummaryTop = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const SummaryBottom = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-end;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

const TxFee = styled.span`
  width: 100%;
  margin: 4px 0;
  font-weight: 400;
  color: #858585;
`;

const TxTotal = styled.span`
  width: 100%;
  margin: 6px 0;
  font-size: 24px;
  font-weight: 700;
  color: ${colorPrimary};
`;

const Button = styled.button`
  width: 100%;
  padding: 1.5rem;
  font-size: 1.5em;
  color: white;
  margin-top: 1em;
  background: ${colorPrimary};
  border-radius: 3px;
  display: block;
  cursor: pointer;
`;

const Line = styled.hr`
  width: 50%;
  border-top: 1px solid ${colorAccent};
  margin: 1rem 0px;
`;

const Methods = ({ title, value }) => {
  return (
    <div>
      <Line />
      <TxRegular>{title}</TxRegular>
      <TxSuccess style={{ textAlign: "left", fontSize: "20px" }}>
        {value}
      </TxSuccess>
    </div>
  );
};

function CheckoutSummary() {
  const currentStep = useSelector((state) => state.stepReducer.currentStep);
  const shipment = useSelector((state) => state.shipmentReducer.shipment);
  const payment = useSelector((state) => state.paymentReducer.payment);

  const ShipmentDetail = () => {
    if (!shipment.name) return "";

    return (
      <Methods
        title="Delivery estimation"
        value={`${shipment.estimate} by ${shipment.name}`}
      />
    );
  };

  const PaymentDetail = () => {
    if (!payment.name) return "";
    return <Methods title="Payment method" value={payment.name} />;
  };

  return (
    <Summary>
      <SummaryTop>
        <TxBold>Summary</TxBold>
        <TxRegular>10 items purchased</TxRegular>

        <ShipmentDetail />
        <PaymentDetail />
      </SummaryTop>

      <SummaryBottom>
        <TxFee>
          Cost of Goods
          <strong style={{ float: "right" }}>500,000</strong>
        </TxFee>
        <TxFee>
          Dropshipping fee
          <strong style={{ float: "right" }}>5,900</strong>
        </TxFee>
        <TxFee>
          <strong>GO-SEND</strong> shipment
          <strong style={{ float: "right" }}>15,000</strong>
        </TxFee>
        <TxTotal>
          Total
          <strong style={{ float: "right" }}>505,900</strong>
        </TxTotal>

        {currentStep !== 3 && (
          <Button>
            {currentStep === 1
              ? "Continue to Payment"
              : payment.name
              ? `Pay with ${payment.name}`
              : "please select payment method"}
          </Button>
        )}
      </SummaryBottom>
    </Summary>
  );
}

export default CheckoutSummary;
