import { LogInForm } from "../components/auth/LogInForm";
import { InlineLink } from "../components/common/InlineLink";
import { Meta } from "../components/common/Meta";
import { useMutation, useQueryClient } from "react-query";
import { logIn } from "../api/api";
import { useGuestRoute } from "../hooks/useGuestRoute";

const LogIn = () => {
  useGuestRoute();
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(logIn, {
    onSuccess() {
      queryClient.refetchQueries("currentUser");
    },
  });

  return (
    <div className="max-w-xs mx-auto">
      <Meta title="Sign in" />
      <h1 className="text-xl mb-3">Sign in</h1>
      <LogInForm
        onSubmit={mutate}
        isLoading={isLoading}
        error={error as string}
      />
      <div className="mt-6">
        Don't have an account? <InlineLink to="/register">Sign up</InlineLink>
      </div>
    </div>
  );
};

export default LogIn;
