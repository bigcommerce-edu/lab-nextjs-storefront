import Image from "next/image";
import { getHeaderSettings } from "./_data/component-data";
import Link from "next/link";
import MiniCart from "../mini-cart";
import AccountLinks from "../account-links";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";

const Header = async () => {
  const { settings, navCategories } = await getHeaderSettings({});

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
        <div className="flex">
          <AccountLinks />
          <MiniCart />
        </div>
      </div>
      <div>
        {navCategories && (
          <ul className="flex">
            {navCategories.map(navItem => (
              <li key={navItem.path} className="mx-2 relative">
                <Link className="font-bold hover:underline" href={`/category${navItem.path}`}>{navItem.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header;
