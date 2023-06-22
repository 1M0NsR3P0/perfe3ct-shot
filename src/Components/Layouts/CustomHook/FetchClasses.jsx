import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProvideAuth } from '../AuthProviders/AuthProvider';

const FetchClasses = () => {
  const { user } = useContext(ProvideAuth);
  const token = localStorage.getItem('access-token')
  // console.log(user)
  const { isLoading, refetch, data: classes = [] } = useQuery({
    queryKey: ['classes', user ? user.email : 'null'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/classes',{
        headers:{
          authorization: `bearer ${token}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
// console.log(classes)
  return [classes, isLoading, refetch];
};

export default FetchClasses;
