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
  email,
  password,
}: {
  email: string,
  password: string,
}) => {
  return Promise.resolve(
    { success: false, error: 'Login not implemented' }
  );
};
