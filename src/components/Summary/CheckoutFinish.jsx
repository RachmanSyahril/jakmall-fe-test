import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  TxTitle,
  TxBold,
  TxRegular,
  BtnTxRegular,
} from "../../assets/styles/typography";

const Container = styled.div`
  margin: auto;
`;

function CheckoutFinish() {
  return (
    <Container>
      <TxTitle>Thank you</TxTitle>
      <TxBold style={{ color: "#585858" }}>Order ID: asdf</TxBold>
      <TxRegular>Your order will be delivered today with </TxRegular>

      <div style={{ marginTop: "5rem" }}>
        <BtnTxRegular>
          <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp; Go to homepage
        </BtnTxRegular>
      </div>
    </Container>
  );
}

export default CheckoutFinish;
