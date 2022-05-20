import { adminRoleRequired } from "./admin-role-required";
import { authorizationRequired } from "./authorization-required";

export const serverMiddlewares = {
  adminRoleRequired,
  authorizationRequired,
};
