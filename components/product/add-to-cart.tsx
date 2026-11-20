'use client';

import { Product } from "@/types/catalog";
import { useActionState } from "react";
import { addProductToCart } from "./_actions/add-product-to-cart";

const AddToCart = ({
  product,
}: {
  product: Product,
}) => {
  const addThisProductToCart = addProductToCart.bind(null, {
    productId: product.entityId,
  });
  const [, formAction, pending] = useActionState(addThisProductToCart, null);

  return (
    <form action={formAction}>
      <button disabled={pending}
        className="p-2 rounded-md text-lg w-44 cursor-pointer bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500">
          {pending ? (
            <span>...</span>
          ) : (
            <span>
              Add to Cart
            </span>
          )}
        </button>
    </form>
  );
};

export default AddToCart;
