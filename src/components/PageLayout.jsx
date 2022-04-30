import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        {isAuthenticated && <SignOutButton />}
      </Navbar>
      <h5>
        <center>This is the layout of the app </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};
