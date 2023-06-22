import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProvideAuth } from '../AuthProviders/AuthProvider';

const Mycart = () => {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(ProvideAuth);
  const { isLoading, refetch, data: cartData = [] } = useQuery({
    queryKey: ['cartData', user ? user.email : 'null'],
    queryFn: async () => {
      if (!user || !user.email) {
        return [];
      }
      const res = await fetch(`http://localhost:5000/cart/email?email=${user.email}`,{
        headers:{
          authorization: `bearer ${token}`
        }
      });
      const data = await res.json();
      return data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (user) {
      refetch(); // Refetch the data when user data changes
    }
  }, [user, refetch]);

  // console.log(cartData);

  return [cartData, isLoading, refetch];
};

export default Mycart;
