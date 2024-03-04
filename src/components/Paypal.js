import React, { useRef, useEffect } from "react";
import "./App.css";

export default function Paypal() {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Fresh N Go, Products",
                amount: {
                  currency_code: "USD",
                  value: 14.95, 
                },
              },
            ],
          });
        },

        onApprove: async function (data, actions) {
          const order = await actions.order.capture();
          console.log(order);
        },

        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  return (
    <div>
      <div ref={paypalRef}></div>
    </div>
  );
}

