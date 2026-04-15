export async function bcGqlFetch<RespType>(query: string, customerToken?: string): Promise<RespType>;
export async function bcGqlFetch<RespType, VarsType>(query: string, variables: VarsType, customerToken?: string): Promise<RespType>;
export async function bcGqlFetch<RespType, VarsType>(
  query: string,
  variables?: VarsType,
  customerToken?: string
): Promise<RespType> {
  const { BIGCOMMERCE_STORE_HASH, BIGCOMMERCE_CHANNEL_ID, BIGCOMMERCE_STOREFRONT_TOKEN } = process.env;

  const result = await fetch(
    `https://store-${BIGCOMMERCE_STORE_HASH}-${BIGCOMMERCE_CHANNEL_ID}.mybigcommerce.com/graphql`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BIGCOMMERCE_STOREFRONT_TOKEN}`,
        ...(customerToken && { 'X-Bc-Customer-Access-Token': customerToken }),
      },
      body: JSON.stringify({
        query,
        ...(variables && { variables }),
      }),
    }
  ).then(res => res.json());

  if (result.errors && result.errors.length > 0) {
    const errors = result.errors.map((err: { message: string }) => err.message);
    const err = errors.join(' ') || "An unexpected error occurred during the request.";
    throw new Error(err);
  }

  return result satisfies RespType;
}
