'use client';

import { useActionState } from "react";
import { logout } from "./_actions/logout";

const LogoutButton = () => {
  const [, formAction, pending] = useActionState(logout, undefined);

  return (
    <form action={formAction}>
      <button
        disabled={pending}
        className="mx-4 font-bold cursor-pointer hover:underline"
      >
        {pending ? (
          <span>...</span>
        ) : (
          <span>Log out</span>
        )}
      </button>
    </form>
  );
}

export default LogoutButton;
