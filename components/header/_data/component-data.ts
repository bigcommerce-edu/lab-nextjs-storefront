import { bcGqlFetch } from "@/lib/bc-client/bc-client-gql";
import { cache } from "react";

// TODO: Add `categoryTree` (with entityId, name, and path) to this query
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
      // TODO: Make sure `categoryTree` is represented in the response type
      //  - Should be an array of `NavCategory` objects
    }
  }
}

// TODO: Add `NavCategory` interface to represent what a category looks like in GraphQL response
//  - entityId is a number
//  - name and path are strings

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
  // TODO: Extract `navCategories` from the response
  //  - This will be the content of `site.categoryTree`

  return {
    settings: {
      storeName: settings.storeName ?? null,
      logoText: settings.logoV2.text ?? null,
      logoImageUrl: settings.logoV2.image?.url ?? null,
    },
    // TODO: Add `navCategories` as a top-level sibling of `settings`
  };
});
