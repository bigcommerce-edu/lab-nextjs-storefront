'use client';

import { Product } from "@/types/catalog";
import { useActionState } from "react";
import { addProductToCart } from "./_actions/add-product-to-cart";

const AddToCart = ({
  // TODO: Add product
}: {
  // TODO: product is of the type `Product`
}) => {
  // TODO: Create `addThisProductToCart` by binding `{ productId: product.entityId }` to addProductToCart

  // TODO: Call useActionState with addThisProductToCart and an initial state of `null`
  //  - Get `formAction` and `pending` from the result

  return (
    <form>
      {/* TODO: Render the button */}
      {/*  - Use formAction as the form's `action` */}
      {/*  - Disable the button and set its label based on `pending` */}
    </form>
  );
};

export default AddToCart;
