export const msalConfig = {
  auth: {
    clientId: "c89b7759-c2ea-448e-b455-dfca4ba566dd",
    authority:
      "d89b8a2c-4e8b-4ab5-8aaa-4444f4bcf21c/40127cd4-45f3-49a3-b05d-315a43a9f033", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
