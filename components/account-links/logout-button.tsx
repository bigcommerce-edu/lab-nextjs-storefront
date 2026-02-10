'use client';

import { useState } from "react";
import { logout } from "./_actions/logout";

const LogoutButton = () => {
  // TODO: Create a state value for `loading`

  // TODO: Create `submitLogout` handler
  //  - Set loading to true before the logout action
  //  - Call logout action
  //  - Set loading to false after the logout action completes

  return (
    <button>
      {/* TODO: Render the button */}
      {/*  - Disable the button and set its label based on `loading` */}
    </button>
  );
}

export default LogoutButton;
