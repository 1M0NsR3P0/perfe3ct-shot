import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading';
import { ProvideAuth } from '../../AuthProviders/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MySelectedClasses = () => {
  
  const token = localStorage.getItem('access-token')
  const {user} = useContext(ProvideAuth)
  const [carts, setCart] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [newCart,setnewCart] = useState([])
  // console.log(user)
    
    useEffect(() => {
        setIsloading(true)
        fetch('http://localhost:5000/cart',{
          headers:{authorization:`bearer ${token}`}
        })
            .then(data => data.json())
            .then(data => {
                setCart(data)
                setIsloading(false)
            })
    }, [])
    useEffect(()=>{
        const filteredClasses = carts?.filter((cart) => cart.addedby === user?.email);
            setnewCart(filteredClasses)
            // console.log(newCart)
    },[carts])
    // console.log(carts)
// handle remove
    const handleRemove = (cart) => {
        Swal.fire({
          title: 'Remove Class',
          text: 'Are you sure you want to remove this class?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, remove it',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform the removal logic here, such as making a DELETE request to the server
            fetch(`http://localhost:5000/cart/${cart._id}`, {
              method: 'DELETE',
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.acknowledged) {
                  // Update the state to reflect the removal
                  setCart((prevCart) => prevCart.filter((item) => item._id !== cart._id));
                  Swal.fire({
                    icon: 'success',
                    title: 'Class removed successfully',
                  });
                } 
                else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Failed to remove class',
                  });
                }
              })
              .catch((error) => {
                Swal.fire({
                  icon: 'error',
                  title: 'An error occurred',
                  text: 'Failed to remove class. Please try again.',
                });
              });
          }
        });
      };

      
    //   
    return (

        <>{
            isLoading ? <Loading></Loading> :
                <div className='mx-[250px]'>
                  <Link to="/checkout"></Link>
                    <div className='mb-10 text-center font-bold text-4xl border-b-2 p-5 text-white '>
                        Here is the Courses that you have selected. let's procced...
                    <div>
                    <div className='text-xl'>Total Count: {newCart.length}</div>
                    <div className='text-xl'>Total Count: {newCart.reduce((sum,data)=>parseInt(data.price) + sum,0)}</div>
                    </div>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-x-[200px] gap-y-[50px] '>
                        {
                            newCart.map(cart =>
                                <div key={cart._id} className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl overflow-y-scroll">
                                    <figure className='w-full h-[200px]'><img src={cart?.thumbnail} alt="Shoes" /></figure>
                                    <div className={`card-body ${cart.seats <= 0 ? 'bg-red-300' : ''}`}>
                                        <h2 className="card-title">{cart?.title}</h2>
                                        <div>Instructor: {cart?.instructorName}
                                            <div className='flex justify-between items-center '>
                                                <div>ratings: {cart.ratings}</div>
                                                <div className='font-semibold text-xl'>price: {cart?.price <= 0 ? <span className='text-success font-bold text-2xl'>Free</span> : cart.price}</div>
                                            </div>
                                            <div className='flex justify-between items-center '>
                                                <div> Available Seats: <span className='text-base font-bold'>{cart.seats}</span></div>
                                                <div className='font-semibold text-xl'>Enrolled: {cart?.students <= 0 ? <span className='text-info font-bold text-2xl'>none</span> : cart.students}</div>
                                            </div>
                                            {cart?.seats >= 0 ? '' : <div className='text-error'>more available seats comming soon..</div>}
                                        </div>
                                        <div className="card-actions justify-end relative">
                                            <button className="btn btn-primary absolute w-full" onClick={() => handleRemove(cart)}>remove</button><br />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
        }
        </>

    );
};

export default MySelectedClasses;