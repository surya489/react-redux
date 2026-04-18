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
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

    const handleLogin = () => {
        const token = makeid(10);
        dispatch(login({
            name,
            email,
            token
        }));
    };

    return (
        <div className="">
            <h5 className="card-title">User Authentication</h5>
            <div className="">
                <input 
                    type="text"
                    placeholder="name"
                    value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text"
                    placeholder="email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <Button
                    children="Login"
                    customClass=""
                    onClick={handleLogin}
                />
            </div>
            {user.map((u) => (
                <div key={u.id} className="card mt-3">
                    <div className="card-body">
                        <>{u.id}</>
                        <h5 className="card-title">{u.name}</h5>
                        <p className="card-text">{u.email}</p>
                    </div>
                </div>
            ))}

        </div>
    )

};

export default User;