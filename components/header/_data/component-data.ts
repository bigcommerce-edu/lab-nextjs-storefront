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
    categoryTree {
      entityId
      name
      path
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
      categoryTree: NavCategory[]
    }
  }
}

interface NavCategory {
  entityId: number;
  name: string;
  path: string;
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
  const navCategories = settingsResp.data.site.categoryTree;

  return {
    settings: {
      storeName: settings.storeName ?? null,
      logoText: settings.logoV2.text ?? null,
      logoImageUrl: settings.logoV2.image?.url ?? null,
    },
    navCategories,
  };
});
