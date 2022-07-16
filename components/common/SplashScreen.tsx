import { Logo } from "./Logo";

export const SplashScreen = () => {
  return (
    <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Logo large />
    </div>
  );
};
