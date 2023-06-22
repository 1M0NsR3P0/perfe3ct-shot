import React, { useState } from 'react';
import fetchUsers from '../../CustomHook/LoadData';

const Profile = () => {
    const [showClass, setShow] = useState(false);
    const [specificUser, isLoadingSpecificUser] = fetchUsers();
    const user = specificUser;
    console.log(user,specificUser)

    const getUrl = (e) => {
        e.preventDefault();
        const url = e.target.url.value;
        // Implement the logic to update the user photo URL
    };

    const getInput = (e) => {
        e.preventDefault();
        const newName = e.target.newName.value;
        const newSpeciality = e.target.newSpeciality.value;
        const newPopularity = e.target.newPopularity.value;
        // Implement the logic to update the user profile

    };

    return (
        <div>
            {isLoadingSpecificUser ? (
                "loading"
            ) : (
                <div name="preview">
                    <div className="flex justify-center items-center">
                        <img className="" src={user.photoURL} alt="" />
                    </div>
                    <div onClick={""} className="flex justify-center items-center">
                        <p>
                            <img src="https://i.ibb.co/vwxzz3W/edit-icon-vector-illustration.png" className="w-5 h-5" alt="icon not found" />
                        </p>
                        <form onBlur={getUrl}>
                            <div className={showClass ? 'block' : 'hidden'}>
                                <input type="text" name="url" placeholder="photo url" />
                                <button onClick={() => update(url)}>Set</button>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center">
                        <h1>{user.displayName}</h1>
                        <span>
                            <img src="https://i.ibb.co/vwxzz3W/edit-icon-vector-illustration.png" className="w-5 h-5" alt="icon not found" />
                        </span>
                    </div>
                    <div>
                        <p className="disabled text-center">{user.email}</p>
                    </div>
                    <div className="text-center">
                        <form onBlur={getInput}>
                            <p>Edit Profile</p>
                            <li className="text-center">
                                <input className="m-2 p-4 rounded-[15px]" type="text" placeholder="enter new name" name="newName" id="newName" defaultValue={user.name} />
                            </li>
                            <li className="text-center">
                                <input className="m-2 p-4 rounded-[15px]" type="text" placeholder="enter new speciality" name="newSpeciality" id="newSpeciality" defaultValue={user.speciality} />
                            </li>
                            <li className="text-center">
                                <input className="m-2 p-4 rounded-[15px]" type="number" placeholder="enter new popularity" name="newPopularity" id="newPopularity" defaultValue={user.popularity} />
                            </li>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
