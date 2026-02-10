import * as jwt from 'jsonwebtoken';
import { getCookieName, isSecure } from "./cookies";
import { cookies } from 'next/headers';

export const getCurrentCustomer = async () => {
  // TODO: Replace this with the actual logic to get the current customer from the session cookie
  //  - Use cookies() to get the customer cookie
  //  - Get JWT_SECRET from environment variables
  //  - Decode/validate the cookie JWT value
  //  - Return a result with entityId and token from the decoded payload
  //  - For any failure, return null
  return Promise.resolve({});
};