import { LogInForm } from "../components/LogInForm";
import { InlineLink } from "../components/InlineLink";
import { Meta } from "../components/Meta";

const LogIn = () => {
  return (
    <div className="max-w-xs mx-auto">
      <Meta title="Sign in" />
      <h1 className="text-xl mb-3">Sign in</h1>
      <LogInForm />
      <div className="mt-6">
        Don't have an account? <InlineLink to="/register">Sign up</InlineLink>
      </div>
    </div>
  );
};

export default LogIn;
