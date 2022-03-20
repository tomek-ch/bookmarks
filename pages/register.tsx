import { InlineLink } from "../components/InlineLink";
import { Meta } from "../components/Meta";

const Register = () => {
  return (
    <>
      <Meta title="Sign up" />
      <h1 className="text-xl">Sign up</h1>
      <div>
        Already have an account? <InlineLink to="/log-in">Sign in</InlineLink>
      </div>
    </>
  );
};

export default Register;
