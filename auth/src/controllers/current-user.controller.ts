import type { Request, Response, NextFunction } from "express";

import { UnauthorizedError } from "../errors/index..errors";
import { success } from "../utils/responses";

import JWT from "../services/JWT";

const currentUser = async (req: Request, res: Response, next: NextFunction) => {
    success(res, req.currentUser, "Current user retrieved successfully");
}

export default currentUser;
