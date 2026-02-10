'use client';

import { useActionState } from "react";
import { registerCustomer, RegisterState } from "./_actions/register-customer";

const initialState: RegisterState = {
  error: null,
  email: "",
  firstName: "",
  lastName: "",
};

const RegisterForm = () => {
  const [state, formAction, pending] = useActionState(registerCustomer, initialState);

  return (
    <form action={formAction}>

      {state.error && (
        <div className="bg-rose-400 p-2 font-bold text-sm text-center">
          {state.error}
        </div>
      )}

      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Email</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" name="email" defaultValue={state.email} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">First Name</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" name="firstName" defaultValue={state.firstName} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Last Name</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="text" name="lastName" defaultValue={state.lastName} />
      </div>
      <div className="my-8 p-4">
        <label className="font-bold text-lg block">Password</label>
        <input className="w-full border border-neutral-300 p-2
          hover:border-neutral-700"
          type="password" name="password" />
      </div>
      <div className="my-8 p-4 text-center">
      <button disabled={pending} className="p-2 rounded-md text-lg w-44 cursor-pointer
        bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-500">
        {pending ? (
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
