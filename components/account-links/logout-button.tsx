'use client';

import { useState } from "react";
import { logout } from "./_actions/logout";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  // TODO: Create `submitLogout` handler
  //  - Set loading to true before the logout action
  //  - Call logout action
  //  - Set loading to false after the logout action completes

  // TODO: Add onClick handler to the button, calling submitLogout
  return (
    <button 
      disabled={loading} 
      className="mx-4 font-bold cursor-pointer hover:underline"
    >
      {loading ? (
        <span>...</span>
      ) : (
        <span>Log out</span>
      )}
    </button>
  );
}

export default LogoutButton;
