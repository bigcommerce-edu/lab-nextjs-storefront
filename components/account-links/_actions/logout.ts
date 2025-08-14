'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import { getCurrentCustomer } from "@/lib/getCurrentCustomer";
import { cookies } from "next/headers";

const logoutQuery = `
mutation Logout {
  logout {
    result
  }
}
`;

interface LogoutResp {
  data: {
    logout: {
      result: string;
    }
  }
}

/**
 * Perform logout
 */
export const logout = async () => {
  const currentCustomer = await getCurrentCustomer();

  if (currentCustomer?.token) {
    await bcGqlFetch<LogoutResp>(
      logoutQuery,
      currentCustomer?.token
    );
  }

  const cookieStore = await cookies();
  const secure = await isSecure();
  const cookieName = getCookieName({ name: "customer", secure });

  cookieStore.delete(cookieName);
};
