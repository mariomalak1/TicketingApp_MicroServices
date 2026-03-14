import mongoose from "../config/database";

interface UserAttrs {
    email: string;
    password: string;
}

interface UserDoc {
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

const schema = new mongoose.Schema<UserDoc> ({
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});


schema.statics.build = function (attrs: UserAttrs) {
    return new User(attrs);
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

const User = mongoose.model<UserDoc, UserModel>("User", schema)

export default User;