'use server';

import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { getCookieName, isSecure } from "@/lib/cookies";
import * as jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const loginQuery = `
mutation Login(
  $email: String!,
  $password: String!
) {
  login(
    email: $email,
    password: $password
  ) {
    customer {
      entityId
    }
    customerAccessToken {
        value
    }
  }
}
`;

interface LoginVars {
  email: string;
  password: string;
}

interface LoginResp {
  data: {
    login: {
      customer: {
        entityId: number;
      }
      customerAccessToken: {
        value: string;
      }
    }
  }
}

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
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    return { success: false, error: "Could not perform login" };
  }

  try {
    const customerResp = await bcGqlFetch<LoginResp, LoginVars>(
      loginQuery,
      {
        email,
        password,
      }
    );

    const customer = customerResp.data.login.customer;
    const token = customerResp.data.login.customerAccessToken.value;
    if (!customer || !token) {
      return { success: false, error: "Customer login failed"};
    }

    const customerJwt = jwt.sign({
      sub: JSON.stringify({
        entityId: customer.entityId,
        token,
      }),
    }, JWT_SECRET);

    const cookieStore = await cookies();
    const secure = await isSecure();
    const cookieName = getCookieName({ name: "customer", secure });

    cookieStore.set({
      name: cookieName,
      value: customerJwt,
      httpOnly: true,
      secure,
    });
  } catch(err) {
    const error = (err instanceof Error) ? err.message : String(err);
    return { success: false, error };
  }

  redirect("/");
};
