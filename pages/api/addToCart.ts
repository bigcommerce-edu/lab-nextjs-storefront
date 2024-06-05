import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie, setCookie } from "cookies-next";
import { Cart } from '@/lib/bc-client/types/cart';
import { addCartLineItem } from '@/lib/bc-client/mutations/addCartLineItem';
import { createCart } from '@/lib/bc-client/mutations/createCart';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ cart: Cart | null }>
) {
  res.status(200).json({ cart: null })
}
