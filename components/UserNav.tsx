import { useAuthContext } from "../context/AuthContext";
import { Button } from "./Button";

export const UserNav = () => {
  const { currentUser, signOut, signIn, signUp } = useAuthContext();

  if (currentUser) {
    return (
      <div className="flex items-center gap-3">
        Hello, {currentUser.name}
        <nav>
          <Button onClick={signOut}>Sign out</Button>
        </nav>
      </div>
    );
  }

  return (
    <nav className="flex gap-2">
      <Button to="/login">Sign in</Button>
      <Button to="/register" variant="primary">
        Sign up
      </Button>
    </nav>
  );
};
