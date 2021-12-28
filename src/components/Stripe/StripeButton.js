import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JfV0vBW1rrijzlRlyvobUCxYaPDYFh5Q2lAWUXdcVwpYWShk0kSxpWSgnvEEEoNkEywrHlbXkg7bAD0PDxEfxxZ00lqtvluQs";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    window.location.href = "/";
  };
  return (
    <StripeCheckOut
      label="PROCEED TO CHECKOUT"
      name="Floffy Stores"
      currency="NGN"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ₦${price.toFixed(2)}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
