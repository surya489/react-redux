import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../redux/action";

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (item.trim() === "" && quantity > 0) {
            return;
        }
        dispatch(addToCart({
            id: Date.now(),
            name: item,
            quantity: quantity
        }));
        setItem("");
        setQuantity(1);
    };

    return (
        <div>
            <h2 className="">Add To Cart</h2>
            <div className="">
                <input 
                    type="text"
                    placeholder="Enter item name to add into cart"
                    name="addToCart"
                    id="addToCart"
                    className="form-control"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Enter Quantity"
                    name="quantity"
                    className="form-control"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                    className="btn"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
            <ul className="">
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div>
                            <li className="" key={item.id}>
                                {item.name} - Quantity: {item.quantity}
                            </li>
                            <button
                                className="btn"
                                onClick={() => dispatch(removeFromCart(item))}
                            >
                                Remove Item
                            </button>
                            <button
                                className="btn"
                                onClick={() => dispatch(updateQuantity(item, item.quantity + 1))}
                            >
                                +
                            </button>
                            <button
                                className="btn"
                                onClick={() => dispatch(updateQuantity(item, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No items in cart</p>
                )}
            </ul>
        </div>
    )

};

export default Cart;