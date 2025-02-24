import User from "../models/user.js";
import bcrypt from "bcrypt"

export async function registerUser(req, res){

    try{
        const data =  req.body;
        data.password = await bcrypt.hashSync(data.password, 10);

        const newUser =  new User(data);

        await newUser.save();
        res.status(200).json({
            message : "User registered successfully"
        })

    }catch(err){
        console.log(err)
    }
}