import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from "cookies-next";
import { login } from '@/lib/bc-client/mutations/login';
import * as jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ loggedIn: boolean, error?: string }>
) {
  res.status(200).json({ loggedIn: false });
}
