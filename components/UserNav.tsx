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
    <nav>
      <Button onClick={signIn} className="mr-2">
        Sign in
      </Button>
      <Button onClick={signUp} variant="primary">
        Sign up
      </Button>
    </nav>
  );
};
