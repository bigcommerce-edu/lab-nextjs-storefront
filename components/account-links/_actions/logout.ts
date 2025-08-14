'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";
import { cookies } from "next/headers";

/**
 * Perform logout
 */
export const logout = async () => {
  
};
