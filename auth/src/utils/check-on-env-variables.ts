const checkOnEnvVariables = () => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }
}

export default checkOnEnvVariables;