import * as Express from "express";
import UserModel , {UserType} from "../models/User";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken"

async function refreshToken(request:Express.Request , response:Express.Response) {
    const cookies = request.cookies
    if (!cookies?.jwt) return response.sendStatus(401);
    //console.log(cookies)
    let refreshToken = cookies.jwt
    const foundUser:any = await UserModel.findOne({ refreshtoken: refreshToken }).exec()
    if (!foundUser) return response.sendStatus(403); //Unauthorized 
    //const match = await bcrypt.compare(password, foundUser.password);
    //console.log(match);
//    console.log(foundUser)
    jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET! ,
        ( err:any , decoded:any)=>{

            console.log(decoded.email, foundUser.email , err)

            if (err || decoded.email !== foundUser.email) return response.sendStatus(403)
            const accessToken = jwt.sign(
                {"email":decoded.email},
                process.env.ACCESS_TOKEN_SECRET!,
                {expiresIn:50}  
            )
            response.json({  accessToken })
        })

}

export {refreshToken}