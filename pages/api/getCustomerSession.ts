import type { NextApiRequest, NextApiResponse } from 'next';
import { Cart } from '@/lib/bc-client/types/cart';
import { getCookie, deleteCookie } from "cookies-next";
import { getCart } from '@/lib/bc-client/queries/getCart';
import getCurrentCustomer from '@/lib/getCurrentCustomer';

type CustomerSessionResp = {
  
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomerSessionResp>
) {
  res.status(200).json({});
}
