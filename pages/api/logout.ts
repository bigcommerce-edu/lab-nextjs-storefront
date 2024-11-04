import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from "cookies-next";
import { logout } from '@/lib/bc-client/mutations/logout';
import getCurrentCustomer from '@/lib/getCurrentCustomer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  if (req.method !== "POST") {
    res.status(404).json({status: "notfound"});
    return;
  }

  const customer = getCurrentCustomer(req, res);
  if (customer?.token) {
    await logout();
  }

  deleteCookie("customer", { req, res });

  res.status(200).json({status: "ok"});
}
