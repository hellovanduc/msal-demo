import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { SignInButton } from "./components/SignInButton";

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SignInButton />
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

function ProfileContent() {
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        console.log("res: ", response);
        localStorage.setItem("res", response);
        setAccessToken(response.accessToken);
        localStorage.setItem("access_token", response.accessToken);
      })
      .catch((e) => {
        instance.acquireTokenRedirect(request).then((response) => {
          setAccessToken(response.accessToken);
          console.log("res: ", response);
          localStorage.setItem("res", response);
          localStorage.setItem("access_token", response.accessToken);
        });
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {accessToken ? (
        <p>Access Token Acquired!</p>
      ) : (
        <Button variant="secondary" onClick={RequestAccessToken}>
          Request Access Token
        </Button>
      )}
    </>
  );
}

export default App;
