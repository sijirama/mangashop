import * as Express from "express";
import UserModel , {UserType} from "../models/User";
import mongoose from "mongoose";
const bcrypt = require('bcrypt');

async function handleNewUser (request:Express.Request , response:Express.Response) {
    const { email , password , phone } = request.body;
    if (!email || !password || !phone) return response.status(400).json({ 'message': 'Username and password are required.' });
    const duplicate = await UserModel.findOne({email: email}).exec()
    if (duplicate) return response.sendStatus(409); //Conflict

    try {
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser:UserType = {
            email:email,
            password:hashedPassword,
            phone:Number(phone)
        }
        const savedNewUser = new UserModel (newUser)
        console.log(savedNewUser)
        savedNewUser.save()
        return response.status(201).json({ 'success': `New user ${newUser.email} created!` });

    } catch (error:any) {
         response.status(500).json({ 'message': error.message });        
    }
}

export {handleNewUser}