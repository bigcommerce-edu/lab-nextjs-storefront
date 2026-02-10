import { CategoryProduct } from "@/types/catalog";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ 
  // TODO: Add destructured parameters
  //  - product and thumbnailSize
}: { 
  // TODO: Add type information for destructured parameters
  //  - product is a `CategoryProduct`
}) => {
  // TODO: Create a currencyFormatter w/ Intl.NumberFormat
  //  - Get the currency from product.prices.price.currencyCode

  return (
    <>
      {/* TODO: Render the product card */}
      {/*  - Wrap everything in a <Link> */}
      {/*  - Check for and render defaultImage */}
      {/*  - Render name as a heading, and sku */}
      {/*  - Use the currencyFormatter to format the price */}
    </>
  );
};

export default ProductCard;
