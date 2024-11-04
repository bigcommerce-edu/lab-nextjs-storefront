import { getCookie, deleteCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from 'http';
import * as jwt from 'jsonwebtoken';
import { Customer } from "./bc-client/types/customer";

const getCurrentCustomer: (
  req: IncomingMessage, res: ServerResponse
) => Customer | null = (
  req, res
) => {
  return null;
}

export default getCurrentCustomer;
