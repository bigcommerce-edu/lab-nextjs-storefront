import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from "cookies-next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  res.status(200).json({status: ''});
}
