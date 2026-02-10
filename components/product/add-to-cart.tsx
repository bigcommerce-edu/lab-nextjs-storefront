'use client';

import { Product } from "@/types/catalog";
import { useState } from "react";
import { addProductToCart } from "./_actions/add-product-to-cart";

const AddToCart = ({
  product,
}: {
  product: Product,
}) => {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);

    const res = await addProductToCart({
      productId: product.entityId,
    });

    setLoading(false);
  }

  return (
    <div>
      <button disabled={loading} 
        className="p-2 rounded-md text-lg w-44 cursor-pointer bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500"
        onClick={onClick}>
          {loading ? (
            <span>...</span>
          ) : (
            <span>
              Add to Cart
            </span>
          )}
        </button>
    </div>
  );
};

export default AddToCart;
