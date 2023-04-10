import * as Express from "express";
import UserModel , {UserType} from "../models/User";
import dotenv from "dotenv";
dotenv.config();
const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken"

async function handleLogout(request:Express.Request , response:Express.Response) {

    const cookies = request.cookies
    if (!cookies?.jwt) return response.sendStatus(204);
    let refreshToken = cookies.jwt
    const foundUser:any = await UserModel.findOne({ refreshtoken: refreshToken }).exec()
    if(foundUser){
        foundUser.refreshtoken = ""
        await foundUser.save()
        console.log(foundUser)
        response.clearCookie("jwt" ,{httpOnly: true})
        response.status(200)
        response.end()
    }else{
        response.clearCookie("jwt" ,{httpOnly: true})
        response.sendStatus(204);
        response.end()
    }
}

export {handleLogout}