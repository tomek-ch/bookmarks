import { LogInDto } from "./LogInDto";

export type RegisterDto = LogInDto & {
  firstName?: string;
  lastName?: string;
};
