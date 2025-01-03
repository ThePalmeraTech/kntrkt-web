import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PaymentSuccess = () => {
  const { paymentId } = useParams();
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 10;
    const retryDelay = 2000;

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`/api/payments/${paymentId}/`);
        if (!response.ok) throw new Error('Payment not found');
        
        const data = await response.json();
        
        if (!isMounted) return;

        switch (data.status) {
          case 'completed':
            setStatus('success');
            break;
          case 'failed':
            setStatus('error');
            setError('Payment failed');
            break;
          case 'processing':
            setStatus('processing');
            if (retryCount < maxRetries) {
              retryCount++;
              setTimeout(checkPaymentStatus, retryDelay);
            } else {
              setStatus('error');
              setError('Payment verification timeout');
            }
            break;
          default:
            if (retryCount < maxRetries) {
              retryCount++;
              setTimeout(checkPaymentStatus, retryDelay);
            } else {
              setStatus('error');
              setError('Payment status unknown');
            }
        }
      } catch (err) {
        if (!isMounted) return;
        setStatus('error');
        setError(err.message);
      }
    };

    checkPaymentStatus();
    return () => { isMounted = false; };
  }, [paymentId]);

  return (
    <Elements stripe={stripePromise}>
      <div className="payment-status">
        {status === 'success' && (
          <div className="success">
            <i className="fas fa-check-circle"></i>
            <h2>Payment successful!</h2>
            <p>Thank you for your payment.</p>
          </div>
        )}
        {status === 'processing' && (
          <div className="processing">
            <div className="spinner"></div>
            <h2>Payment processing...</h2>
            <p>Please wait while we confirm your payment.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="failed">
            <i className="fas fa-times-circle"></i>
            <h2>Payment failed</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
    </Elements>
  );
};

export default PaymentSuccess; 