import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/action";
import Button from "./Button";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Counter</h5>
                <div className="display-6 text-center mb-4 text-primary">{count}</div>
                <div className="d-flex gap-2">
                    <Button 
                        customClass="flex-grow-1"
                        onClick={() => dispatch(increment())}
                        children="Increment"
                    />
                    <Button 
                        customClass="flex-grow-1 btn-danger"
                        onClick={() => dispatch(decrement())}
                        children="Decrement"
                        disabled={count <= 0}
                    />
                </div>
            </div>
        </div>
    )

};

export default Counter;