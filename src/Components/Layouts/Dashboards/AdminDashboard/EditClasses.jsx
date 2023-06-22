import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import FetchClasses from '../../CustomHook/FetchClasses';

const EditClasses = ({ cls }) => {
  const [refetch] = FetchClasses();
  const [isEditing, setIsEditing] = useState(false);
  const [classStatus, setClassStatus] = useState(cls.status);
  const [feedback, setFeedback] = useState('');

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setClassStatus(newStatus);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (id) => {
    if (classStatus === 'rejected' && feedback.trim() === '') {
      Swal.fire('Please provide feedback for rejection.');
      return;
    }

    fetch(`http://localhost:5000/classes/status/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: classStatus, feedback }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire('Course status updated!');
          refetch();
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
      });

    setIsEditing(false);
  };

  const isRejected = classStatus === 'rejected';

  return (
    <tr className="hover">
      <Helmet>
        <title>Admin | Users</title>
      </Helmet>
      <th>
        <small>{cls._id}</small>
      </th>
      <td>{cls.title}</td>
      <td>
        {isEditing ? (
          <div>
            <select value={classStatus} onChange={handleStatusChange}>
              <option value="pending">Pending</option>
              <option value="approved">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            {isRejected && (
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-20 resize-none mt-2"
                placeholder="Enter your feedback"
              ></textarea>
            )}
          </div>
        ) : (
          classStatus
        )}
      </td>
      <td>{cls.email}</td>
      <td>
        {isEditing ? (
          <>
            <button onClick={() => handleSaveClick(cls._id)}>Update</button>
          </>
        ) : (
          <button onClick={handleEditClick}>
            <AiFillEdit />
          </button>
        )}
      </td>
    </tr>
  );
};

export default EditClasses;
