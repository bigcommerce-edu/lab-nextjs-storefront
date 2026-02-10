'use client';

import { Product } from "@/types/catalog";
import { useState } from "react";
import { addProductToCart } from "./_actions/add-product-to-cart";

const AddToCart = ({
  // TODO: Add product
}: {
  // TODO: product is of the type `Product`
}) => {
  // TODO: Create a state value for `loading`

  // TODO: Create an onClick handler for the button
  //  - Set loading to true before the cart action
  //  - Call addProductToCart with the product's entityId
  //  - Set loading to false after the cart action completes

  return (
    <div>
      {/* TODO: Render the button */}
      {/*  - Disable the button based on `loading` */}
      {/*  - Use the onClick handler */}
    </div>
  );
};

export default AddToCart;
