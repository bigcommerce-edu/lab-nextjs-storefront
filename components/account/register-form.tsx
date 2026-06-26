'use client';

import { useActionState } from "react";
import { registerCustomer, RegisterState } from "./_actions/register-customer";

// TODO: Define `initialState` as a `RegisterState`
//  - `error` is null, and `email`, `firstName`, and `lastName` are empty strings

const RegisterForm = () => {
  // TODO: Call useActionState with registerCustomer and initialState
  //  - Get `state`, `formAction`, and `pending` from the result

  return (
    <form>
      {/* TODO: Render the form */}
      {/*  - Use formAction as the form's `action` */}
      {/*  - Render state.error if it exists */}
      {/*  - Labels and inputs for email, firstName, lastName, and password, each with a `name` matching its formData key */}
      {/*  - Use the values in `state` as each input's defaultValue (except password) */}
      {/*  - Render button with label and disabled state depending on `pending` */}
    </form>
  );
}

export default RegisterForm;
