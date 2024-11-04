import { bcGqlFetch } from "../bc-client-gql";

const getGlobalDataQuery = `
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

type GetGlobalDataVars = {
  logoSize: number
}

type GetGlobalDataResp = {
  data: {
    site: {
      settings: {
        storeName?: string,
        logoV2: {
          text?: string,
          image?: {
            url: string,
          }
        }
      },
      categoryTree: NavCategory[]
    }
  }
}

export type StoreSettings = {
  storeName: string | null,
  logoText: string | null,
  logoImageUrl: string | null,
}

export type NavCategory = {
  
}

export const getGlobalData: 
  (customerToken?: string) => Promise<{settings: StoreSettings, navCategories: NavCategory[]}> 
= async (customerToken) => {
  const settingsResp = await bcGqlFetch<GetGlobalDataResp, GetGlobalDataVars>(
    getGlobalDataQuery,
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
    navCategories: [],
  };
}
