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
  params,
}: {
  params: Promise<{ catPath: string[] }>,
}) {
  const { catPath } = await params;
  const path = `/${catPath.join('/')}`;

  const mainImgSize = 500;
  const thumbnailSize = 500;

  let category;
  try {
    category = await getCategoryWithProducts({
      path,
      mainImgSize,
      thumbnailSize,
      page: { limit: 12 },
    });
  } catch(err) {
    console.log(err);
    category = null;
  }

  console.log(category);

  return (
    <>
      
    </>
  );
}