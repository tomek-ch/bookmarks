import { InlineLink } from "../components/InlineLink";
import { Meta } from "../components/Meta";

const LogIn = () => {
  return (
    <>
      <Meta title="Sign in" />
      <h1 className="text-xl">Sign in</h1>
      <div>
        Don't have an account? <InlineLink to="/register">Sign up</InlineLink>
      </div>
    </>
  );
};

export default LogIn;
