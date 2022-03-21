import { InlineLink } from "../components/InlineLink";
import { Meta } from "../components/Meta";
import { RegisterForm } from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-xs mx-auto">
      <Meta title="Sign up" />
      <h1 className="text-xl mb-3">Sign up</h1>
      <RegisterForm />
      <div className="mt-6">
        Already have an account? <InlineLink to="/log-in">Sign in</InlineLink>
      </div>
    </div>
  );
};

export default Register;
