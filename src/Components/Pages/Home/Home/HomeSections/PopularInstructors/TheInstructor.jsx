import React from 'react';

const TheInstructor = () => {
    return (
        <div className='w-full '>
            <div className='text-center w-full'>See Deatils abuot this instructors</div>
            <div className='w-full flex flex-col gap-6 justify-center items-center border-b-2 border-blue-300 '>
                <div className='flex justify-center items-center w-full '>
                    <img src="" alt="" className='w-[40%] h-[40vh] text-center' />
                </div>
                <div className='flex justify-evenly'>
                    <div>
                        <h1>{"user?.name"}</h1>
                        <h1>{"user?.email"}</h1>
                        <h1>{"user?.bio"}</h1>
                    </div>
                    <div>
                        <h2>{"user?.popularity"}</h2>
                        <h2>{"user?.popularity"}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheInstructor;