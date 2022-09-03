import React from "react";
import styled from "styled-components";
import { GrCheckbox } from "react-icons/gr";

import { colorPrimary } from "../../assets/styles/app-theme";
import { TxTitle, BtnTxRegular } from "../../assets/styles/typography";
import {
  InputBlock,
  InputAreaBlock,
  GridContainer,
} from "../../assets/styles/containers";

const Delivery = styled.div`
  background: white;
  border-right: 1px solid ${colorPrimary};
`;

const DeliveryTitle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
`;

const BtnDropshipper = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  color: green;
`;

function DeliveryForm() {
  return (
    <Delivery>
      <DeliveryTitle>
        <TxTitle>Delivery Details</TxTitle>
        <BtnDropshipper>
          <GrCheckbox />
          <BtnTxRegular>Send as dropshipper</BtnTxRegular>
        </BtnDropshipper>
      </DeliveryTitle>

      <GridContainer columnTemplate="55% 45%" gap="8px" padding="2rem 0">
        <div>
          <InputBlock placeholder="Email" />
          <InputBlock placeholder="Phone Number" />
          <InputAreaBlock placeholder="Delivery Address" height="200px" />
        </div>
        <div>
          <InputBlock placeholder="Dropshipper Name" />
          <InputBlock placeholder="Dropshipper Phone number " />
        </div>
      </GridContainer>
    </Delivery>
  );
}

export default DeliveryForm;
