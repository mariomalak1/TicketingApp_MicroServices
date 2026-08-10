import type { Request, Response, NextFunction } from "express";

import { success } from "../utils/responses";

const currentUser = async (req: Request, res: Response, next: NextFunction) => {
    success(res, req.currentUser, "Current user retrieved successfully");
}

export default currentUser;
