import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function User() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
            .then(() => setUsers(users.filter(user => user._id !== id)))
            .catch((err) => console.log(err));
    };

    return (
        <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
            <div className="w-50  bg-white rounded  p-3">
                <Link to="/create" className="btn btn-success mb-2">Add User</Link>
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
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success me-2">Update</Link>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
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