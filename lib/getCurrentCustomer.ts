import * as jwt from 'jsonwebtoken';
import { getCookieName, isSecure } from "./cookies";
import { cookies } from 'next/headers';

export const getCurrentCustomer = async () => {
  const cookieStore = await cookies();
  const secure = await isSecure();
  const cookieName = getCookieName({ name: "customer", secure });

  const customerJwt = cookieStore.get(cookieName)?.value;
  if (!customerJwt) {
    return null;
  }

  const JWT_SECRET = process.env.JWT_SECRET ?? '';

  let customerResult;
  try {
    const customerClaim = jwt.verify(customerJwt, JWT_SECRET);
    const customer = JSON.parse(customerClaim.sub?.toString() ?? '');
    customerResult = {
      entityId: parseInt(customer.entityId ?? ''),
      token: customer.token ?? '',
    }
  } catch (err) {
    customerResult = null;
    cookieStore.delete(cookieName);
  }

  return customerResult;
};