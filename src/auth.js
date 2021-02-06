import { Link } from "react-router-dom";

export const userIsAuthenticated = () => {
  return (
    <>
      <h1>You Are Logged In</h1>
      <Link to="/">Log Out</Link>
    </>
  );
};

export const userIsNotAuthenticated = () => {
  return (
    <>
      <h1>You Are Logged Out :)</h1>
    </>
  );
};
