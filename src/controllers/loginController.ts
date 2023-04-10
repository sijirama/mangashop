import * as Express from "express";
import UserModel , {UserType} from "../models/User";
import mongoose from "mongoose";
const bcrypt = require('bcrypt');

async function handleLogin (request:Express.Request , response:Express.Response) {

    const {email, password} = request.body
    if (!email || !password) return response.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await UserModel.findOne({ email: email }).exec()
    if (!foundUser) return response.sendStatus(401); //Unauthorized 
    const match = await bcrypt.compare(password, foundUser.password);
    console.log(match);
    if(match){
        response.status(200).json({ 'message':"user is logged in"})
    }else{
        response.sendStatus(401);
    }
}

export {handleLogin}