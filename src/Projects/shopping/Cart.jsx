import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../redux/thunk/CartThunk';
import { addCart, removeCart } from '../../redux/slices/cartSlices/CartSlice';

const Cart = () => {
    const { products, error, loading, cart } = useSelector((state) => state.cart);
    const [active, setActive] = useState("1");
    const dispatch = useDispatch();
    const maxLength = 100;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleCart = (prod) => {
        dispatch(addCart(prod));
    };

    const handleRemove = (id) => {
        dispatch(removeCart(id));
    };

    const handleChange = () => {
        setActive((prevActive) => (prevActive === "1" ? "2" : "1"));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const truncatedProducts = products.map((prod) => ({
        ...prod,
        truncatedDescription: prod.description.length > maxLength
            ? prod.description.substring(0, maxLength) + "..."
            : prod.description,
    }));

    return (
        <div className='cart'>
            <div className="card">
                <div className="cart_top">
                    <h2>Shopping Cart</h2>
                    <div className="">
                        <button>
                            Cart: <span>{cart.length}</span>
                        </button>
                        <button style={{ marginLeft: "1rem" }} onClick={handleChange}>
                            {active === "1" ? "Show Cart Items" : "Show Products"}
                        </button>
                    </div>
                </div>
                <div className="cart_content">
                    {active === "1" ? (
                        truncatedProducts.map((prod) => (
                            <div className="cart_card" key={prod.id}>
                                <img src={prod.images[0]} alt="Product" />
                                <h5>{prod.title}</h5>
                                <p className='description'>
                                    {prod.truncatedDescription}
                                </p>
                                <h3>Price: $<span>{prod.price}</span></h3>
                                <div className="tags">
                                    {prod.tags.map((tag, index) => (
                                        <p key={index}>{tag}</p>
                                    ))}
                                </div>
                                <button onClick={() => handleCart(prod)}>Add to Cart</button>
                            </div>
                        ))
                    ) : (
                        cart.map((prod) => (
                            <div className="cart_card" key={prod.id}>
                                <img src={prod.images[0]} alt="Product" />
                                <h5>{prod.title}</h5>
                                <p className='description'>
                                    {prod.truncatedDescription}
                                </p>
                                <h3>Price: $<span>{prod.price}</span></h3>
                                <div className="tags">
                                    {prod.tags.map((tag, index) => (
                                        <p key={index}>{tag}</p>
                                    ))}
                                </div>
                                <button onClick={() => handleRemove(prod.id)}>Remove from Cart</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
