'use client';

import { useActionState } from "react";
import { logout } from "./_actions/logout";

const LogoutButton = () => {
  // TODO: Call useActionState with the logout action and an initial state of `undefined`
  //  - Get `formAction` and `pending` from the result

  return (
    <form>
      {/* TODO: Render the button */}
      {/*  - Use formAction as the form's `action` */}
      {/*  - Disable the button and set its label based on `pending` */}
    </form>
  );
}

export default LogoutButton;
