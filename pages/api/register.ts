import type { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/lib/bc-client/mutations/register';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean, error?: string }>
) {
  res.status(200).json({ success: false });
}
