import Image from "next/image";
import { getHeaderSettings } from "./_data/component-data";
import Link from "next/link";
import MiniCart from "../mini-cart";
import AccountLinks from "../account-links";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";

const Header = async () => {
  // TODO: Include `navCategories` in the destructuring
  const { settings } = await getHeaderSettings({});

  const emptySettings = { logoImageUrl: null, logoText: null, storeName: null };
  const { logoImageUrl, logoText, storeName } = settings ?? emptySettings;

  return (
    <header className="w-full p-4 border-b border-neutral-300">
      <div className="flex items-center justify-between">
        <h1>
          <a href="/">
            {logoImageUrl ? (
              <Image src={logoImageUrl}
                alt={storeName ?? ''} width={300} height={200} />
            ) : (
              <span className="font-bold text-2xl">{logoText ?? (storeName ?? '')}</span>
            )}
          </a>
        </h1>
        {/* TODO: Render the AccountLinks */}
        {/* TODO: Render the MiniCart */}
      </div>
      {/* TODO: Add navigation links here */}
      {/*  - Check for the existence of `navCategories` */}
      {/*  - Render a <ul> */}
      {/*  - Loop over `navCategories` and use `path` for the href and key */}
    </header>
  )
}

export default Header;
