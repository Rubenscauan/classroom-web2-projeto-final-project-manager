import { Request } from "express";
import { UserRole } from "../models/User";
import { AuthUser } from "../services/utils";

export const getAuthUser = (req: Request): AuthUser | undefined => {
  const idHeader = req.header("x-user-id");
  const roleHeader = req.header("x-user-role");

  if (!idHeader || !roleHeader) {
    return undefined;
  }

  const id = Number(idHeader);
  if (!Number.isFinite(id)) {
    return undefined;
  }

  const role = roleHeader.toLowerCase() as UserRole;
  if (!Object.values(UserRole).includes(role)) {
    return undefined;
  }

  return { id, role };
};
