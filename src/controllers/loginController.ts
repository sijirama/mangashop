import * as Express from "express";
import UserModel , {UserType} from "../models/User";
import dotenv from "dotenv";
dotenv.config();
const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken"

async function handleLogin (request:Express.Request , response:Express.Response) {

    const {email, password} = request.body
    if (!email || !password) return response.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser:any = await UserModel.findOne({ email: email }).exec()
    if (!foundUser) return response.sendStatus(401); //Unauthorized 
    const match = await bcrypt.compare(password, foundUser.password);
    //console.log(match);
    if(match){
        const accessToken = jwt.sign(
            {"email":email},
            process.env.ACCESS_TOKEN_SECRET!,
            {expiresIn:150}  
            )
            const refreshToken = jwt.sign(
                {"email":email},
                process.env.REFRESH_TOKEN_SECRET!,
                {expiresIn:'1d'}  
                )
                
                foundUser.refreshtoken =  refreshToken
                await foundUser.save()
                console.log(foundUser)
                
                response.cookie("jwt" , refreshToken , { httpOnly: true , maxAge: 24 * 60 * 60 * 1000})
                response.status(200).json({ accessToken })
            }else{
        response.sendStatus(401);
    }
}

export {handleLogin}