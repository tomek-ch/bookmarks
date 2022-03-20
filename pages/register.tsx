import { InlineLink } from "../components/InlineLink";

const Register = () => {
  return (
    <>
      <h1 className="text-xl">Sign up</h1>
      <div>
        Already have an account? <InlineLink to="/log-in">Sign in</InlineLink>
      </div>
    </>
  );
};

export default Register;
