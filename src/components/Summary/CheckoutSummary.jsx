import React from "react";
import styled from "styled-components";
import { colorPrimary } from "../../assets/styles/app-theme";
import { TxRegular, TxBold } from "../../assets/styles/typography";

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

function CheckoutSummary() {
  return (
    <Summary>
      <SummaryTop>
        <TxBold>Summary</TxBold>
        <TxRegular>10 items purchased</TxRegular>
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
        <TxTotal>
          Total
          <strong style={{ float: "right" }}>505,900</strong>
        </TxTotal>
        <Button>Continue to Payment</Button>
      </SummaryBottom>
    </Summary>
  );
}

export default CheckoutSummary;
