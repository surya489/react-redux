import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, fetchProducts } from "../redux/action";

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
        console.log("Adding to cart:", product);
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

    return (
        <div>
            <h2>Shopping Cart</h2>
            {loading && <p>Loading products...</p>}
            {error && <p>Error: {error}</p>}
            <h3>Products</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h3>Cart</h3>
            <ul>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id}>
                            <li>
                                {item.name} - Quantity: {item.quantity} - Total: ${(item.price * item.quantity).toFixed(2)}
                            </li>
                            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                            <button onClick={() => dispatch(updateQuantity(item, item.quantity + 1))}>+</button>
                            <button onClick={() => dispatch(updateQuantity(item, item.quantity - 1))} disabled={item.quantity <= 1}>-</button>
                        </div>
                    ))
                ) : (
                    <p>No items in cart</p>
                )}
            </ul>
            <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
    )

};

export default Cart;