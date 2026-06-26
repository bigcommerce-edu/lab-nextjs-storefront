'use client';

import { useActionState } from "react";
import { loginCustomer, LoginState } from "./_actions/login-customer";

// TODO: Define `initialState` as a `LoginState`
//  - `error` is null and `email` is an empty string

const LoginForm = () => {
  // TODO: Call useActionState with loginCustomer and initialState
  //  - Get `state`, `formAction`, and `pending` from the result

  return (
    <form>
      {/* TODO: Render the form */}
      {/*  - Use formAction as the form's `action` */}
      {/*  - Render state.error if it exists */}
      {/*  - Labels and inputs for email and password, each with a `name` matching its formData key */}
      {/*  - Use state.email as the email input's defaultValue */}
      {/*  - Render button with label and disabled state depending on `pending` */}
    </form>
  );
};

export default LoginForm;
