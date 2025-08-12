import PageHeading from "@/components/page-heading";

export default function Home() {
  return (
    <>
      <PageHeading>Welcome to a BigCommerce Storefront!</PageHeading>
      <div className="w-1/3 text-center font-sans">
        This storefront is built in <a target="_blank" href="https://nextjs.org/">Next.js</a>.
      </div>
    </>
  );
}
