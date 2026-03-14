import bcrypt from "bcrypt";

class Password {
    private static salt: number = 10;

    public static async hash(plainPassword: string): string {
        return bcrypt.hash(plainPassword, Password.salt);
    }
    
    public static async compare(storedPassword: string, suppliedPassword: string): boolean {
        return await bcrypt.compare(storedPassword, suppliedPassword);
    }
}

export default Password;