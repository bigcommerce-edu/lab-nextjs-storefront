'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface LoginState {
  error: string | null;
  email: string;
}

/**
 * Perform login
 */
export const loginCustomer = async (

) => {
  return Promise.resolve({});
};
