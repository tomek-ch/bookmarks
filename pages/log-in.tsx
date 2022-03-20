import { InlineLink } from "../components/InlineLink";

const LogIn = () => {
  return (
    <>
      <h1 className="text-xl">Sign in</h1>
      <div>
        Don't have an account? <InlineLink to="/register">Sign up</InlineLink>
      </div>
    </>
  );
};

export default LogIn;
