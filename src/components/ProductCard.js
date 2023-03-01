import React from "react";
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div className="bg-indigo-500 text-white h-8 w-8 grid place-content-center rounded-full absolute top-2 right-2">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li key={index} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            className="bg-red-500 rounded-full py-1 px-6 flex-1 text-white text-bold flex items-center justify-between"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <p className="text-lg">Remove</p>
            <RiDeleteBin2Fill size={25} />
          </button>
        )}
        {!pathname.includes("cart") && (
          <>
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
            <button
              title="Add to wishlist"
              className="bg-indigo-500  py-1 px-2 rounded-full"
            >
              <BiListPlus className="text-white" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
