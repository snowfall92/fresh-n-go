import React, { useRef, useEffect } from "react";

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

        onApprove: async (data, actions) => {
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
      <div className="paypal" ref={paypalRef} style={{ textAlign: "center" }}></div>
    </div>
  );
}


