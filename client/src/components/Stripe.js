import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51Jj97mFjKtpO9Sxr3ooea52A6mRUwCAMAsFfSmkqQwiLRq2y2krLim9DeUOASuZwBPtYCSXvX5Nj2X3Lf0VfvHKB00r77vAAZ1";

const stripeForm = () => {

  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/payment", {
        token: token.id,
        amount: totalAmount,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const tokenHandler = (token) => {
    handleToken(100, token);
  };
  return (
    <div>
      <Stripe
        name="onlyGifts"
        image=""
        email
        description="Your total is £50"
        amount={5000}
        token={tokenHandler}
        stripeKey={KEY}
      />
    </div>
  );
}
export default stripeForm;
