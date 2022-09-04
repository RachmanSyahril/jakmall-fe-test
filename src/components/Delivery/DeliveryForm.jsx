import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { GrCheckbox } from "react-icons/gr";

import { TxTitle, BtnTxRegular } from "../../assets/styles/typography";
import { GridContainer } from "../../assets/styles/containers";
import { InputBlock, InputAreaBlock } from "../../assets/styles/input";

const Delivery = styled.div`
  background: white;
`;

const DeliveryTitle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
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
  const { register, handleSubmit, error } = useForm();
  const onSubmit = (data) => console.log(data, error);

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
          <InputBlock
            onChange={(e) => console.log("Adsfasdf")}
            placeholder="Email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <InputBlock
            placeholder="Phone Number"
            {...register("phone_number")}
          />
          <InputAreaBlock
            placeholder="Delivery Address"
            height="200px"
            {...register("address")}
          />
        </div>
        <div>
          <InputBlock placeholder="Dropshipper Name" />
          <InputBlock placeholder="Dropshipper Phone number " />
        </div>
      </GridContainer>

      <BtnTxRegular onClick={handleSubmit(onSubmit)}>Simpan</BtnTxRegular>
    </Delivery>
  );
}

export default DeliveryForm;
