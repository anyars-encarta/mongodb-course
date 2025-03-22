import { model, models, Schema } from "mongoose";

interface UserParams {
    name: string;
    email: string;
    dob: Date;
    address: string;
    phone: string;
    password: string;
}

const UserSchema = new Schema<UserParams>({
    name: String,
    email: String,
    dob: Date,
    address: String,
    phone: String,
    password: String
});

const User = models?.User || model<UserParams>("User", UserSchema);

export default User;