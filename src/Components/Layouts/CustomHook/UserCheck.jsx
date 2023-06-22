import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ProvideAuth } from "../AuthProviders/AuthProvider";

const UserCheck = () => {
    const { user } = useContext(ProvideAuth)
    const token = localStorage.getItem('access-token');
    const { loadingAdmin, refetch, data: isAdmin = [] } = useQuery({
        queryKey: ['isAdmin', user ? user.email : 'null'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/level/email?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            const data = await res.json();
            if(data.role==='admin'){

                return true;
            }
            else{
                return false;
            }
        }
    })
    const { isInsLoading, data: isInstructor = [] } = useQuery({
        queryKey: ['isInstructor', user ? user.email : 'null'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/level/email?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            const data = await res.json();
            if(data.role==='instructor'){

                return true;
            }
            else{
                return false;
            }
        }
    })
    return [isAdmin, loadingAdmin,isInsLoading,isInstructor]
}
export default UserCheck;