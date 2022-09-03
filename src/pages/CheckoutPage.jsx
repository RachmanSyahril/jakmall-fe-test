import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { setCurrentStep } from "../redux/actions";

import { BtnTxRegular } from "../assets/styles/typography";
import { Article, GridContainer } from "../assets/styles/containers";

import CheckoutStepper from "../components/Stepper/CheckoutStepper";
import CheckoutSummary from "../components/Summary/CheckoutSummary";
import DeliveryForm from "../components/Delivery/DeliveryForm";

const mapStateToProps = (state) => ({
  currentStep: state.stepReducer.currentStep,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStep: (step) => dispatch(setCurrentStep(step)),
});

class CheckoutPage extends Component {
  render() {
    const { currentStep, onChangeStep } = this.props;

    return (
      <Article padding="2rem">
        <CheckoutStepper currentStep={currentStep} changeStep={onChangeStep} />

        {currentStep < 3 ? (
          <BtnTxRegular>
            <AiOutlineArrowLeft style={{ verticalAlign: "middle" }} />
            &nbsp;&nbsp;
            {currentStep < 2 ? "Back to cart" : "Back to delivery"}
          </BtnTxRegular>
        ) : (
          ""
        )}

        <GridContainer columnTemplate="70% 30%" gap="14px" padding="2rem 0">
          {currentStep == 1 ? (
            <DeliveryForm />
          ) : currentStep == 2 ? (
            <h1>Payment Form</h1>
          ) : (
            <h1>Finish Form</h1>
          )}
          
          <CheckoutSummary />
        </GridContainer>
      </Article>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
