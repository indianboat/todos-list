import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ErrorMsg = () => {
  useEffect(() => {
    const handleOffline = () => {
      toast.error('You are not connected to the internet!');
    };

    const handleOnline = () => {
      toast.dismiss();
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return <Toaster />;
};

export default ErrorMsg;
