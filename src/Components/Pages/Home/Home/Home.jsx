import React from 'react';
import Banner from '../Header/Banner';
import Reviews from './HomeSections/Reviews';
import PopularClasses from './HomeSections/PopularClassesSection/PopularClasses';
import PopularInstructors from './HomeSections/PopularInstructors/PopularInstructors';


const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>


        </div>
    );
};

export default Home;