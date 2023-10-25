import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

export default function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const user = users.filter((u) => u.id == id);
    const { name, email } = user[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id, name: uname, email: uemail }));
        navigate("/");
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={uname}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={uemail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    );
}
