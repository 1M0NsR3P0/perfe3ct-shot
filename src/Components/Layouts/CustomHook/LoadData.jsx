import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProvideAuth } from '../AuthProviders/AuthProvider';

const fetchUsers = () => {
  const { user } = useContext(ProvideAuth);
  const token = localStorage.getItem('access-token')
  // console.log(user.email)
  const { isLoading, refetch, data: users = [] } = useQuery({
    queryKey: ['users', user ? user.email : 'null'],
    queryFn: async () => {

      const res = await fetch('http://localhost:5000/users', {
        headers: {
            authorization: `bearer ${token}`
        }
    });
      const data = await res.json();
      return data;
    },

  });

  const { isLoading: isLoadingSpecificUser, refetch: refetchSpecificUser, data: specificUser = null } = useQuery({
    queryKey: ['specificUser', user ? user.email : 'null'],
    queryFn: async () => {
      if (!user || !user.email) {
        return [];
      }
      const res = await fetch(`http://localhost:5000/users/email?email=${user.email}`);
      const data = await res.json();
      return data;
    },
    enabled: !!user,
  });
  

  return [users, isLoading, refetch, specificUser, isLoadingSpecificUser, refetchSpecificUser];
};

export default fetchUsers;
