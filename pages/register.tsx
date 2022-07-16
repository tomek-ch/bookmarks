import { InlineLink } from "../components/common/InlineLink";
import { Meta } from "../components/common/Meta";
import { RegisterForm } from "../components/auth/RegisterForm";
import { useMutation, useQueryClient } from "react-query";
import { register } from "../api/api";
import { GuestRoute } from "../components/common/GuestRoute";

const Register = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(register, {
    onSuccess() {
      queryClient.refetchQueries("currentUser");
    },
  });

  return (
    <GuestRoute>
      <div className="max-w-xs mx-auto">
        <Meta title="Sign up" />
        <h1 className="text-xl mb-3 mt-10">Sign up</h1>
        <RegisterForm
          onSubmit={mutate}
          isLoading={isLoading}
          error={error as string}
        />
        <div className="mt-6">
          Already have an account? <InlineLink to="/log-in">Sign in</InlineLink>
        </div>
      </div>
    </GuestRoute>
  );
};

export default Register;
