import React from "react";
import styled from "styled-components";
import { GoCheck } from "react-icons/go";

import { colorSuccess } from "../../assets/styles/app-theme";
import { TxTitle } from "../../assets/styles/typography";
import { SelectButton } from "../../assets/styles/input";

const TxTag = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #858585;
`;

const TxFee = styled.h5`
  font-size: 26px;
  font-weight: 600;
  color: #585858;
  margin-top: 6px;
`;

const TxSuccess = styled.h5`
  font-size: 26px;
  font-weight: 600;
  color: ${colorSuccess};
  margin-top: 6px;
  text-align: center;
  vertical-align: middle;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 2px;
`;

function PaymentForm() {
  const shipmentTypes = [
    { name: "GO-SEND", fee: "15,000" },
    { name: "JNE", fee: "9,000" },
    { name: "Personal Courier", fee: "29,000" },
  ];

  const paymentTypes = [
    { name: "e-Wallet", fee: "1,500,000 left" },
    { name: "Bank Transfer", fee: "" },
    { name: "Virtual Account", fee: "" },
  ];

  return (
    <div>
      <div>
        <TxTitle>Shipment</TxTitle>

        <div>
          {shipmentTypes.map((type) => (
            <SelectButton checked={type.name == "JNE"}>
              <Grid>
                <div>
                  <TxTag>{type.name}</TxTag>
                  <TxFee>{type.fee}</TxFee>
                </div>
                <TxSuccess>{type.name == "JNE" ? <GoCheck /> : ""}</TxSuccess>
              </Grid>
            </SelectButton>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <TxTitle>Payment</TxTitle>

        <div>
          {paymentTypes.map((type) => (
            <SelectButton checked={type.name == "e-Wallet"}>
              <Grid>
                <div>
                  {type.fee ? (
                    <TxTag>{type.name}</TxTag>
                  ) : (
                    <TxTag style={{ color: "transparent" }}>{type.name}</TxTag>
                  )}

                  <TxFee>{type.fee || type.name}</TxFee>
                </div>
                <TxSuccess>{type.name == "e-Wallet" ? <GoCheck /> : ""}</TxSuccess>
              </Grid>
            </SelectButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
