'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Perform login
 */
export const loginCustomer = async ({
  // TODO: Add destructured parameters
  //  - email, password
}: {
  // TODO: Add type information for destructured parameters
}) => {
  // TODO: Replace this with a response object indicating `success: false` with a "not implemented" error message
  return Promise.resolve({});
};
