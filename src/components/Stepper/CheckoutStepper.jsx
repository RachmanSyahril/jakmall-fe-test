import React from "react";
import { TxBold } from "../../assets/styles/typography";

import styled from "styled-components";
import {
  colorBG,
  colorBGVariant,
  colorPrimary,
} from "../../assets/styles/app-theme";

import { BsChevronRight } from "react-icons/bs";

const Container = styled.nav`
  background: ${colorBG};
  display: flex;
  gap: 2rem;
  width: max-content;
  position: fixed;
  left: 50%;
  top: 3rem;
  padding: 1rem 2rem;
  z-index: 2;
  transform: translateX(-50%);
  border-radius: 2rem;
`;

const Point = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`;

const Bullet = styled.a`
  background: ${(props) => (props.checked ? colorPrimary : colorBGVariant)};
  width: 35px;
  height: 35px;
  padding-top: 2%;
  padding-left: 12%;
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: inline;
  font-size: 1.3rem;
`;

function CheckoutStepper() {
  return (
    <Container>
      <Point>
        <Bullet checked>1</Bullet>
        <TxBold>Delivery</TxBold>
      </Point>

      <TxBold>
        <BsChevronRight style={{ verticalAlign: 'middle' }}/>
      </TxBold>

      <Point>
        <Bullet>2</Bullet>
        <TxBold>Payment</TxBold>
      </Point>

      <TxBold>
        <BsChevronRight style={{ verticalAlign: 'middle' }}/>
      </TxBold>

      <Point>
        <Bullet>3</Bullet>
        <TxBold>Finish</TxBold>
      </Point>
    </Container>
  );
}

export default CheckoutStepper;
