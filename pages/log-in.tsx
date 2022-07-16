import { LogInForm } from "../components/auth/LogInForm";
import { InlineLink } from "../components/common/InlineLink";
import { Meta } from "../components/common/Meta";
import { useMutation, useQueryClient } from "react-query";
import { logIn } from "../api/api";
import { GuestRoute } from "../components/common/GuestRoute";

const LogIn = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(logIn, {
    onSuccess() {
      queryClient.refetchQueries("currentUser");
    },
  });

  return (
    <GuestRoute>
      <div className="max-w-xs mx-auto">
        <Meta title="Sign in" />
        <h1 className="text-xl mb-3 my-10">Sign in</h1>
        <LogInForm
          onSubmit={mutate}
          isLoading={isLoading}
          error={error as string}
        />
        <div className="mt-6">
          Don't have an account? <InlineLink to="/register">Sign up</InlineLink>
        </div>
      </div>
    </GuestRoute>
  );
};

export default LogIn;
