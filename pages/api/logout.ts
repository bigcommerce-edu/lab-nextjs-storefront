import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from "cookies-next";
import { logout } from '@/lib/bc-client/mutations/logout';
import getCurrentCustomer from '@/lib/getCurrentCustomer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  res.status(200).json({status: ''});
}
