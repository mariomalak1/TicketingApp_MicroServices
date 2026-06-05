import type { Request, Response, NextFunction } from "express";

import { User } from "../models/index";
import { BadRequestError } from "../errors/index..errors";
import { success } from "../utils/responses";

import JWT from "../services/JWT";
import Password from "../services/password";

const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const existing = await User.findOne({email});

    if(!existing){
        throw new BadRequestError("Invalid credentials");
    }
        
    const passwordIsMatch = await Password.compare(password, existing.password);

    if(!passwordIsMatch){
        throw new BadRequestError("Invalid credentials");
    }

    const token = JWT.sign({id: existing._id, email: existing.email}, process.env.JWT_SECRET!, {expiresIn: "1h"});

    req.session = { token };

    return success(res, existing, "User signed in successfully");
}

export { signin };