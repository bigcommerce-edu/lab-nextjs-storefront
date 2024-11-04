import { bcGqlFetch } from "../bc-client-gql";

const logoutQuery = `
mutation Logout {
  logout {
    result
  }
}
`;

type LogoutResp = {
  data: {
    logout: {
      result: string
    },
  },
}

export const logout: (
  customerToken?: string
) => Promise<void> = async (
  customerToken
) => {
  await bcGqlFetch<LogoutResp>(
    logoutQuery,
    customerToken
  );
}
