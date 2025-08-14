import * as jwt from 'jsonwebtoken';
import { getCookieName, isSecure } from "./cookies";
import { cookies } from 'next/headers';

export const getCurrentCustomer = async () => {
  return Promise.resolve({});
};