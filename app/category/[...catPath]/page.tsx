import { notFound } from "next/navigation";
import { getCategoryWithProducts } from "./page-data";
import PageHeading from "@/components/page-heading";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import ArrowLongLeft from "@/components/icons/arrow-long-left";
import ArrowLongRight from "@/components/icons/arrow-long-right";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";

export default async function CategoryPage({
  // TODO: Add params
  // TODO: Add searchParams
}: {
  // TODO: The type of `params` is a Promise that returns `catPath` (the URL segments)
  // TODO: The type of `searchParams` is a Promise that returns an object with `before` and `after` (both optional)
}) {
  // TODO: Get `catPath` from params and form a full path from all segments

  // TODO: Define static mainImgSize and thumbnailSize values

  // TODO: Extract `before` and `after` from searchParams

  // TODO: Fetch the category
  //  - Use `getCategoryWithProducts` 
  //  - Pass in path, mainImgSize, thumbnailSize, and page
  //  - For page, pass a hard-coded limit of 12

  // TODO: Log the category response

  return (
    <>
      {/* TODO: Render the category page */}
      {/*  - Render a PageHeading with the category name */}
      {/*  - Check for and render defaultImage and description */}
      {/*  - Render a <ul>, loop over products and render a ProductCard for each */}
    </>
  );
}