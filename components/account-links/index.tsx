import { getCurrentCustomer } from "@/lib/getCurrentCustomer";
import Link from "next/link";
import LogoutButton from "./logout-button";

const AccountLinks = async () => {
  // TODO: Use the `getCurrentCustomer` helper function to get the current customer from the session cookie

  return (
    <>
      {/* TODO: Render the account links */}
      {/*  - Render LogoutButton if there's a current customer */}
      {/*  - Render a pair of Links if there is no customer - /register and /login */}
    </>
  );
};

export default AccountLinks;
