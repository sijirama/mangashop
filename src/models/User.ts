import mongoose from "mongoose";

export type UserType = {
    email: string,
    password: string,
    phone: number
}

export const UserSchema = new mongoose.Schema<UserType>({
    email:{type:String, required:true},
    password:{type:String, required:true},
    phone:{type:Number , required:true},
})

const UserModel = mongoose.model<UserType>("User" , UserSchema)
export default UserModel