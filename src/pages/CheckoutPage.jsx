import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { BtnTxRegular } from "../assets/styles/typography";
import { Article, GridContainer } from "../assets/styles/containers";

import CheckoutStepper from "../components/Stepper/CheckoutStepper";
import CheckoutSummary from "../components/Summary/CheckoutSummary";
import DeliveryForm from "../components/Delivery/DeliveryForm";

function CheckoutPage() {
  return (
    <Article padding="2rem">
      <CheckoutStepper />

      <BtnTxRegular>
        <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
        &nbsp;&nbsp; Back to cart
      </BtnTxRegular>

      <GridContainer columnTemplate="70% 30%" gap="14px" padding="2rem 0">
        <DeliveryForm />
        <CheckoutSummary />
      </GridContainer>
    </Article>
  );
}

export default CheckoutPage;
