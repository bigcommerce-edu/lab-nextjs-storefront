'use client';

import { useState } from "react";
import { loginCustomer } from "./_actions/login-customer";

const LoginForm = () => {
  // TODO: Create state values for all form fields
  //  - email, password
  // TODO: Create state values for loading and errorMsg

  // TODO: Create `submitLogin` handler
  //  - Set loading to true and errorMsg to empty before the login action
  //  - Call loginCustomer with the form fields
  //  - Set loading to false after the login action completes
  //  - Check for `success` in the response and set errorMsg accordingly

  return (
    <form>
      {/* TODO: Render the form */}
      {/*  - Render errorMsg if it exists */}
      {/*  - Labels and appropriate inputs for all form fields */}
      {/*  - Render button with label and disabled state depending on `loading` */}
      {/*  - Use submitLogin as the onSubmit handler */}
    </form>
  );
};

export default LoginForm;
