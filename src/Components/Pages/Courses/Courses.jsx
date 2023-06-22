import React, { useContext, useEffect, useState } from 'react';
import FetchClasses from '../../Layouts/CustomHook/FetchClasses';
import Loading from '../../Shared/Loading';
import Swal from 'sweetalert2';
import { ProvideAuth } from '../../Layouts/AuthProviders/AuthProvider';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [isDisabled, setDisabled] = useState(false);
    const { user } = useContext(ProvideAuth);
    const [classes, isLoading] = FetchClasses();
    const [newClasses, setNew] = useState([]);

    useEffect(() => {
        const filteredClasses = classes.filter((cls) => cls.status === 'approved');
        setNew(filteredClasses);
      }, [classes]);

    const handleWishlist = (cls) => {
        if (cls.seats <= 0) {
            return;
        }

        const newObj = {
            description: cls.description,
            instructorEmail: cls.email,
            title: cls.title,
            price: cls.price,
            thumbnail: cls.thumbnail,
            status: cls.status,
            ratings: cls.ratings,
            seats: cls.seats,
            students: cls.students,
            addedby: user.email
        };

        setDisabled(true); 

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newObj)
        })
            .then((data) => data.json())
            .then((data) => {
                // console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'successfully added'
                });
                if (data.message === 'User already exists') {
                    Swal.fire('already added');
                }
            })
            .finally(() => {
                setDisabled(false); // Enable the button
            });
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="mx-[250px]">
                    <div className="mb-10 text-center font-bold text-4xl border-b-2 p-5">
                        Here Are Our Top Most Courses For You
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                        {newClasses.map((cls) => (
                            <div key={cls._id} className="card card-compact w-[400px] h-[450px] bg-base-100 shadow-xl">
                                <figure className="w-full h-[200px]">
                                    <img src={cls?.thumbnail} alt="Shoes" />
                                </figure>
                                <div className={`card-body ${cls.seats <= 0 ? 'bg-red-300' : ''}`}>
                                    <h2 className="card-title">{cls?.title}</h2>
                                    <div>
                                        Instructor: {cls?.instructorName}
                                        <div className="flex justify-between items-center">
                                            <div>ratings: {cls.ratings}</div>
                                            <div className="font-semibold text-xl">
                                                price: {cls?.price <= 0 ? <span className="text-success font-bold text-2xl">Free</span> : cls.price}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                Available Seats: <span className="text-base font-bold">{cls.seats}</span>
                                            </div>
                                            <div className="font-semibold text-xl">
                                            </div>
                                                Enrolled: {cls?.students <= 0 ? <span className="text-info font-bold text-2xl">none</span> : cls.students}<div>popularity: {typeof(cls?.popularity)==='number'?cls?.popularity:parseInt(cls?.popularity)}</div>
                                        </div>
                                        {cls?.seats >= 0 ? '' : <div className="text-error">more available seats coming soon..</div>}
                                    </div>
                                    <div className="card-actions justify-end relative">
                                        <Link className="btn btn-primary " to={`/singleClasses/${cls._id}`}>
                                            show details
                                        </Link>
                                        <button className="btn btn-primary " onClick={() => handleWishlist(cls)} disabled={cls.seats <= 0 || isDisabled}>
                                           Add to Cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Courses;
