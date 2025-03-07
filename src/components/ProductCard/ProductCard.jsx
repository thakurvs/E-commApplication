import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../app/cartSlice'
import {showToast} from '../../app/toastSlice'
import { nanoid } from '@reduxjs/toolkit'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from 'react-spinners/PropagateLoader';

function ProductCard({id, title, price, description, image, category}) {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        const product = {id, title, price, description, image};
        dispatch(addToCart(product));

        // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        // let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
        // totalPrice += price;
        // cartItems.push(product);
        // localStorage.setItem('cart', JSON.stringify(cartItems));
        // localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

        dispatch(showToast({message: 'Item added to cart!', type : 'success'}));
    }

    // const cartItems = useSelector((state) => state.cart.items);
    // const totalPrice = useSelector((state) => state.cart.totalPrice);

    // console.log(cartItems);  // This should log the updated cart items after adding a product
    // console.log(totalPrice);  // This should show the updated price

  return (
    <div className="w-full text-center border-[1px] border-[#eaeaea]">
        <Link to={`/productdetails/${id}`}>
            {image?.length > 0 ? (
                <div className="relative">
                    {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <Loader color="#4A90E2" size={15} /> {/* Loader animation */}
                    </div>
                    )}
                    <LazyLoadImage
                    alt={title}
                    effect="blur"
                    className={`object-cover w-full transition-opacity duration-500 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    src={image}
                    style={{
                        objectFit: 'cover',
                    }}
                    afterLoad={() => setIsLoading(false)} // Hide loader after image is loaded
                    />
                </div>
                ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    No Image
                </div>
            )}

        </Link>
        <div className="px-5 pb-5">
            <Link to={`/productdetails/${id}`}>
                <h3 className='text-2xl font-bold tracking-tight text-black'>{title}</h3>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{description.substring(0, 100)}</h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
                <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    4.0
                </span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddToCart}
                >Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
