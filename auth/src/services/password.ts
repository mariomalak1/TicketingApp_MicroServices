import bcrypt from "bcrypt";

class Password {
    private static salt: number = 10;

    public static async hash(plainPassword: string): Promise<string> {
        return bcrypt.hash(plainPassword, Password.salt);
    }
    
    public static async compare(suppliedPassword: string, storedPassword: string) {
        return await bcrypt.compare(suppliedPassword, storedPassword);
    }
}

export default Password;