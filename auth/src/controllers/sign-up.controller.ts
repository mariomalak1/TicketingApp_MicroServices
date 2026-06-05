import type { Request, Response, NextFunction } from "express";

import { User } from "../models/index";
import { BadRequestError } from "../errors/index..errors";
import { created } from "../utils/responses";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const existing = await User.findOne({email});

    if(existing){
        throw new BadRequestError("This email is already in use");
    }

    const user = User.build({
        email,
        password
    });

    await user.save()

    return created(res, user, "User created successfully");
}

export default signup;