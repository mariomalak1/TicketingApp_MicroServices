import type { currentUserPayload } from "./types";

declare global {
    namespace Express {
        interface Request {
            currentUser?: currentUserPayload;
        }
    }
}