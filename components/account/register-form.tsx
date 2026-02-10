'use client';

import { useState } from "react";
import { registerCustomer } from "./_actions/register-customer";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submitRegister = async () => {
    setLoading(true);
    setErrorMsg(null);

    const registerResp = await registerCustomer({
      email,
      firstName,
      lastName,
      password,
    });

    setLoading(false);
    
    if (!registerResp.success) {
      setErrorMsg(registerResp.error ?? "An unexpected error occurred");
    }
  }

  return (
    <form onSubmit={(e) => {e.preventDefault(); submitRegister()}}>

      {errorMsg && (
        <div className="bg-rose-400 p-2 font-bold text-sm text-center">
          {errorMsg}
        </div>
      )}

      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Email</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">First Name</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Last Name</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Password</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="my-8 p-4 text-center">
      <button disabled={loading} className="p-2 rounded-md text-lg w-44 cursor-pointer
        bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500">
        {loading ? (
          <span>...</span>
        ) : (
          <span>
            Register
          </span>
        )}
      </button>
      </div>
    </form>
  );
}

export default RegisterForm;
