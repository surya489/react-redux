import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, fetchProducts } from "../redux/action";
import Button from "./Button";

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            dispatch(updateQuantity(existingItem, existingItem.quantity + 1));
        } else {
            dispatch(addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            }));
        }
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Shopping Cart</h5>
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="mb-3">Available Products</h6>
                        {loading && <div className="alert alert-info">Loading products...</div>}
                        {error && <div className="alert alert-danger">Error: {error}</div>}
                        <div className="list-group">
                            {products.map(product => (
                                <div key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="mb-0">{product.name}</h6>
                                        <small className="text-muted">${product.price}</small>
                                    </div>
                                    <Button 
                                        customClass='btn-sm'
                                        onClick={() => handleAddToCart(product)}
                                        children="Add"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h6 className="mb-3">Cart Items</h6>
                        {cart.length > 0 ? (
                            <>
                                <table className="table table-sm">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>
                                                    <div className="btn-group btn-group-sm" role="group">
                                                        <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(updateQuantity(item, item.quantity - 1))} disabled={item.quantity <= 1}>-</button>
                                                        <button type="button" className="btn btn-outline-secondary" disabled>{item.quantity}</button>
                                                        <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(updateQuantity(item, item.quantity + 1))}>+</button>
                                                    </div>
                                                </td>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                <td>
                                                    <Button 
                                                        customClass='btn-sm btn-danger'
                                                        onClick={() => dispatch(removeFromCart(item))}
                                                        children="Remove"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="alert alert-info">
                                    <strong>Total: ${totalPrice.toFixed(2)}</strong>
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-muted py-3">No items in cart</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Cart;