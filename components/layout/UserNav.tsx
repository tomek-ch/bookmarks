import { Button } from "../common/buttons/Button";
import { useQuery, useQueryClient } from "react-query";
import { updateToken, validate } from "../../api/api";
import { User } from "../../types/User";

export const UserNav = () => {
  const user = useQuery<User>("currentUser", { retry: false });
  const queryClient = useQueryClient();

  const signOut = () => {
    updateToken(null);
    queryClient.setQueryData("currentUser", null);
  };

  if (user.data) {
    return (
      <div className="flex items-center gap-3">
        Hello, {user.data.email}
        <nav>
          <Button onClick={signOut}>Sign out</Button>
        </nav>
      </div>
    );
  }

  return (
    <nav className="flex gap-2">
      <Button to="/log-in">Sign in</Button>
      <Button to="/register" variant="primary">
        Sign up
      </Button>
    </nav>
  );
};
