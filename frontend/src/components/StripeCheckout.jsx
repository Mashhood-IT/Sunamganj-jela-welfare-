import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("pk_test_12345"); // TODO: Replace with your real publishable key

export default function StripeCheckout({ amount, name, email, isRecurring, onSuccess }) {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIntent() {
      setLoading(true);
     const res = await axios.post(`${import.meta.env.VITE_API_URL}/stripe/create-payment-intent`, {
    amount,
    name,
    email,
    isRecurring,
  });
      const data = await res.data;
      setClientSecret(data.clientSecret);
      setLoading(false);
    }
    fetchIntent();
  }, [amount, name, email, isRecurring]);

  if (loading) return <div>Loading payment...</div>;
  if (!clientSecret) return <div>Unable to initialize payment.</div>;

  return (
    <div>
      {/* Stripe Elements UI here */}
      <p>Stripe payment UI goes here. (Integrate Stripe Elements)</p>
      {/* For demo, just show a success button */}
      <button onClick={onSuccess} className="bg-green-600 text-white px-4 py-2 rounded">Simulate Payment Success</button>
    </div>
  );
}
