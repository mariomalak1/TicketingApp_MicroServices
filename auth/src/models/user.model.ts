import mongoose from "../config/database";

import Password from "../services/password";

interface UserAttrs {
    email: string;
    password: string;
}

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

const schema = new mongoose.Schema<UserDoc, UserModel>({
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

schema.pre('save', async function () {
    if(this.isModified('password')){
        const hashed = await Password.hash(this.password);
        this.set("password", hashed);
    }
})

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

schema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};


const User = mongoose.model<UserDoc, UserModel>("User", schema)

export default User;