import type { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/lib/bc-client/mutations/register';

type RegisterReq = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean, error?: string }>
) {
  if (req.method !== "POST") {
    res.status(404).json({ success: false });
    return;
  }

  const reqData = req.body satisfies RegisterReq;
  const { email, firstName, lastName, password } = reqData;

  try {
    const customer = await register(email, firstName, lastName, password);

    res.status(200).json({ success: true });
  } catch (err)  {
    const error = (err instanceof Error) ? err.message : String(err);

    res.status(401).json({ success: false, error });
  }
}
