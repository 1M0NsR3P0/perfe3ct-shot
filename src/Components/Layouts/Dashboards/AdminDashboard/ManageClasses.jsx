import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';


const ManageClasses = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [userRole, setRole] = useState(user.role);
  
    const handleRoleChange = (event) => {
      const newRole = event.target.value;
      setRole(newRole);
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = (id) => {
  
        fetch(`https://perfect-shot-server.vercel.app/classes/update/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: userRole }), // Ensure role is sent as a string
        })
          .then(response => response.json())
          .then(data => {
            // console.log(data)
            if(data.modifiedCount>0){
              Swal.fire("success!");
              
            }
          })
          .catch(error => {
            // Handle any errors that occurred during the request
          });
      
        setIsEditing(false);
  
      
  
      setIsEditing(false);
    };
  
    const isDisabled = userRole === 'admin' || userRole === 'instructor';
    return (
        <tr className='hover'>
      <th><small className=''>{user._id}</small></th>
      <td>{user.name}</td>
      <td>
        {isEditing ? (
          <select value={userRole} onChange={handleRoleChange} disabled={isDisabled}>
            <option value="student">Make Student</option>
            <option value="instructor">Make Instructor</option>
            <option value="admin">Make Admin</option>
          </select>
        ) : (
          userRole
        )}
      </td>
      <td>{user.email}</td>
      <td>
        {isEditing ? (
          <button onClick={() => handleSaveClick(user._id)}>Update</button>
        ) : (
          <button onClick={handleEditClick} disabled={isDisabled}>edit</button>
        )}
      </td>
    </tr>
    );

};

export default ManageClasses;