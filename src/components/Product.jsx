import React, { useEffect, useState } from "react";
import { getProductDetailsFromDb } from "../firebase/Database/Products";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProductDetails() {
      setIsLoading(true);
      setProductDetails([]); //I have explicitly set it empty, so that there is no previous state stored (to avoid duplicate cards on screen)
      const productData = await getProductDetailsFromDb();
      productData.forEach((product) => {
        setProductDetails((prv) => [...prv, { ...product.data() }]);
      });
      setIsLoading(false);
    }
    getProductDetails();
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="flex justify-center items-center h-96">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="flex flex-wrap m-2">
          {productDetails.map((product, index) => (
            <div
              class="group m-3 w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
              key={index}
            >
              <a class="relative flex h-60 overflow-hidden" href="#">
                <Link to="/details" state={product}>
                  <img
                    class="absolute top-0 right-0 h-full w-full object-cover"
                    src={product.image}
                    alt="product image"
                  />
                </Link>
              </a>
              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl tracking-tight text-slate-900">
                    {product.name}
                    <span class=" text-gray-400">
                      {" | "}
                      {product.category}
                    </span>
                  </h5>
                </a>

                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-slate-900">$79</span>
                    <span class="text-sm text-slate-900 line-through">
                      {product.price}
                    </span>
                  </p>
                </div>
                <button class="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;
