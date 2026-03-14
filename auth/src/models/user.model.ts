import mongoose from "../config/database";

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



interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

schema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};


const User = mongoose.model<UserDoc, UserModel>("User", schema)

export default User;