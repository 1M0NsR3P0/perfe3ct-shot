import { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ProvideAuth } from '../AuthProviders/AuthProvider';

const fetchMyCourses = () => {
  const { user } = useContext(ProvideAuth);
//   console.log(user);

  const { isLoading, refetch, data: classes = [] } = useQuery({
    queryKey: ['users', user ? user.email : 'null'],
    queryFn: async () => {
      if (!user || !user.email) {
        return [];
      }
      const res = await fetch(`http://localhost:5000/classes/mycourses/email?email=${user.email}`);
      const data = await res.json();
      return data;
    },
    enabled: !!user, // Only enable the query when user data is available
  });
  

  useEffect(() => {
    if (user) {
      refetch(); // Refetch the data when user data changes
    }
  }, [user, refetch]);

  return [classes, isLoading, refetch,];
};

export default fetchMyCourses;
