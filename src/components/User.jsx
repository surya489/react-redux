import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/action";
import Button from "./Button";

const User = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // Source - https://stackoverflow.com/a/1349426
    // Posted by csharptest.net, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-04-18, License - CC BY-SA 4.0

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleLogin = () => {
        if (name.trim() && email.trim()) {
            const token = makeid(10);
            dispatch(login({
                name,
                email,
                token
            }));
            setName('');
            setEmail('');
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">User Authentication</h5>
                {user.length === 0 ? (
                    <div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button
                            children="Login"
                            customClass="w-100"
                            onClick={handleLogin}
                        />
                    </div>
                ) : (
                    <div>
                        {user.map((u) => (
                            <div key={u.id} className="alert alert-success">
                                <h6>Welcome, {u.name}!</h6>
                                <p className="mb-2">Email: {u.email}</p>
                                <small className="text-muted">Token: {u.token}</small>
                            </div>
                        ))}
                        <Button
                            children="Logout"
                            customClass="w-100 btn-danger"
                            onClick={handleLogout}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;