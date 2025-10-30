import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ onSuccess, amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${import.meta.env.VITE_API_URL}/`,
      },
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Payment successful!");
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay £${amount}`}
      </button>
    </form>
  );
}

export default function StripeCheckout({ amount,currency, name, email, isRecurring, onSuccess }) {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchIntent() {
      setLoading(true);
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/stripe/create-payment-intent`, {
          amount,
          currency,
          name,
          email,
          isRecurring,
        });
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        toast.error("Failed to initialize payment");
      } finally {
        setLoading(false);
      }
    }
    fetchIntent();
  }, [amount, currency, name, email, isRecurring]);



  if (loading) return <div className="text-center py-8">Loading payment...</div>;
  if (!clientSecret) return <div className="text-center py-8 text-red-500">Unable to initialize payment.</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm onSuccess={onSuccess} amount={amount} />
    </Elements>
  );
}

