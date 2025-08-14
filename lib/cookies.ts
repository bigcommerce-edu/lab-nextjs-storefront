import { headers } from "next/headers";

const securePrefix = "_Secure-";

export const isSecure = async () => {
  const headersList = await headers();
  return headersList.get("X-Forwarded-Proto") === "https";
};

export const getCookieName = ({
  name,
  secure,
}: {
  name: string,
  secure: boolean,
}) => {
  return secure ? `${securePrefix}${name}` : name;
};
