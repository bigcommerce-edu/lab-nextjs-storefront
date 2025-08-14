import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { cache } from "react";

const getHeaderSettingsQuery = `
query GetSettings($logoSize: Int!) {
  site {
    settings {
      storeName
      logoV2 {
        ... on StoreTextLogo {
          text
        }
        ... on StoreImageLogo {
          image {
            url(width: $logoSize)
          }
        }
      }
    }
  }
}
`;

interface GetHeaderSettingsVars {
  logoSize: number;
}

interface GetHeaderSettingsResp {
  data: {
    site: {
      settings: {
        storeName?: string;
        logoV2: {
          text?: string;
          image?: {
            url: string;
          }
        }
      }
    }
  }
}

/**
 * Fetch basic store settings for the header
 */
export const getHeaderSettings = cache(async ({ 
  customerToken,
}: { 
  customerToken?: string,
}) => {
  const settingsResp = await bcGqlFetch<GetHeaderSettingsResp, GetHeaderSettingsVars>(
    getHeaderSettingsQuery,
    {
      logoSize: 500,
    },
    customerToken
  );

  const settings = settingsResp.data.site.settings;

  return {
    settings: {
      storeName: settings.storeName ?? null,
      logoText: settings.logoV2.text ?? null,
      logoImageUrl: settings.logoV2.image?.url ?? null,
    },
  };
});
