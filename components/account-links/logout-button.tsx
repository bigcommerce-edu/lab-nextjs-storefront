'use client';

import { useState } from "react";
import { logout } from "./_actions/logout";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const submitLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  }

  return (
    <button 
      disabled={loading} 
      className="mx-4 font-bold cursor-pointer hover:underline"
      onClick={submitLogout}
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
