import type { Request, Response, NextFunction } from "express";

import { success } from "../utils/responses";


const logout = async (req: Request, res: Response, next: NextFunction) => {   
    let payload = null;

    if(req.session?.token){
        req.session = null;
    }

    success(res, payload, "User logged out successfully");
}

export default logout;
