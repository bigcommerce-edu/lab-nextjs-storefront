import { CartItem } from "@/types/cart";
import Image from "next/image";

const CartItemRow = ({
  // TODO: Add destructured parameters
  //  - item and currencyCode
}: { 
  // TODO: Add type information for destructured parameters
  //  - item is a CartItem
}) => {
  // TODO: Define a static value for thumbnailSize

  // TODO: Create a currencyFormatter w/ Intl.NumberFormat
  //  - Set currency based on currencyCode param

  return (
    <tr>
      {/* TODO: Render the item row */}
      {/*  - Render a <tr> */}
      {/*  - Separate cells for item, quantity, and extendedSalePrice */}
      {/*    - The item cell should render an image (with imageUrl), name, and sku */}
    </tr>
  );
};

export default CartItemRow;
