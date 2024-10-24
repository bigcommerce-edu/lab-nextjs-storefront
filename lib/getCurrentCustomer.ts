import { getCookie, deleteCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from 'http';
import * as jwt from 'jsonwebtoken';
import { Customer } from "./bc-client/types/customer";

const getCurrentCustomer: (
  req: IncomingMessage, res: ServerResponse
) => Customer | null = (
  req, res
) => {
  const customerJwt = getCookie("customer", { req, res });
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
    deleteCookie("customer", { req, res });
  }

  return customerResult;
}

export default getCurrentCustomer;
