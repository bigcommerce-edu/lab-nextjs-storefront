'use client';

import { useState } from "react";
import { registerCustomer } from "./_actions/register-customer";

const RegisterForm = () => {
  // TODO: Create state values for all form fields
  //  - email, firstName, lastName, password
  // TODO: Create state values for loading and errorMsg

  // TODO: Create `submitRegister` handler
  //  - Set loading to true and errorMsg to empty before the register action
  //  - Call registerCustomer with the form fields
  //  - Set loading to false after the register action completes
  //  - Check for `success` in the response and set errorMsg accordingly

  return (
    <form>
      {/* TODO: Render the form */}
      {/*  - Render errorMsg if it exists */}
      {/*  - Labels and appropriate inputs for all form fields */}
      {/*  - Render button with label and disabled state depending on `loading` */}
      {/*  - Use submitRegister as the onSubmit handler */}
    </form>
  );
}

export default RegisterForm;
