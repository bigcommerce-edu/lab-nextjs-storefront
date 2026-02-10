import { getCurrentCustomer } from "@/lib/getCurrentCustomer";
import Link from "next/link";
import LogoutButton from "./logout-button";

const AccountLinks = async () => {
  const currentCustomer = await getCurrentCustomer();

  return (
    <>
      {currentCustomer?.entityId ? (
        <LogoutButton />
      ) : (
        <>
          <Link href="/register" className="mx-4 font-bold hover:underline">Register</Link>
          |
          <Link href="/login" className="mx-4 font-bold hover:underline">Log in</Link>
        </>
      )}

    </>
  );
};

export default AccountLinks;
