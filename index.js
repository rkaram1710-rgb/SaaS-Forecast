import { initializePaddle } from '@paddle/paddle-js';

const paddle = initializePaddle({
  token: "live_61a4f03edd5c07f9d63efc1a427", // 
  environment: "production"
});

document.getElementById("buyButton").addEventListener("click", () => {
  paddle.Checkout.open({ items: [
    { priceId: "pri_01kqw3c16qafz5abky5s8te4vc", quantity: 1 }
  ] }); // 
});
