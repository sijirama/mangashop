import { allowedOrigins } from "../config/allowedOrigins";
import * as Express  from "express";

export default function credentialsMiddleware (req:Express.Request , res:Express.Response | any , next:Express.NextFunction){
    const origin = req.headers.origin
    if( allowedOrigins.includes(origin!) ){
        res.header("Access-Control-Allow-Credentials" , true )
    }else{
        next()
    }
}
