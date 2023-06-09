import * as Express from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken"

const verifyJWT = (request:Express.Request | any , resposne:Express.Response , next:Express.NextFunction) => {

    const authHeader = request.headers['authorization']
    if(!authHeader) return resposne.sendStatus(401)
    const token = authHeader.split(" ")[1]
    console.log(token )
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET!, // lmao ts wants me to type guard with ifs 30 fucking times, hell no.
        (err:any , decoded:any) => { // any for life.
            if (err) console.log(err.message)
            if (err) return resposne.sendStatus(403)
            request.email = decoded!.email
            console.log("done=======================================")
            next()
        }
    )
}

export {verifyJWT}