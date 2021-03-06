export const msalConfig = {
  auth: {
    clientId: "c89b7759-c2ea-448e-b455-dfca4ba566dd",
    authority:
      "https://login.microsoftonline.com/40127cd4-45f3-49a3-b05d-315a43a9f033", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
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
