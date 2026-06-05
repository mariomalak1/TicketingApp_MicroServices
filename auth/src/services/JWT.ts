import jwt from 'jsonwebtoken';

class JWT {
    public static sign(payload: Object, secret: string, options?: jwt.SignOptions): string {
        return jwt.sign(payload, secret, options);
    }

    public static verify(token: string, secret: string, options?: jwt.VerifyOptions): Object | string {
        return jwt.verify(token, secret, options);
    }
}

export default JWT;