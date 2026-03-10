import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function User() {
    const [users,setUsers]= useState([{
        name:"sudeep",
        email:"sudeep@gmail.com",
        age:20
    }]);
    return(
  <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
<div className="w-50  bg-white rounded  p-3">
    <Link to="/create" className="btn btn-success">Add User</Link>
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
users.map((user)=>(
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td>
           <Link to="/Updateuser" className="btn btn-success">Update</Link>
        </td>
    </tr>

))}
        </tbody>
        </table>
    </div>
  </div>
    );
}
export default User;