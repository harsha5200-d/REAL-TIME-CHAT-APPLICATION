import { generateToken } from "../lib/utils";
import User from "../models/user.model"

export const signup = (req,res) =>{
    
    const {fullname, email, password} = req.body;
    try{
        if(password.length < 6)
        {
            return res.status(400).json({message : "password must be at least 6 characters "})
        }

        const user = await User.findOne({email})

        if (user) return res.status(400).json({message: "Email already exists"})

        const salt = await bycrypt.getSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt)

        const newUser = new user({
            fullName : fullName,
            email : email,
            password : hashedPassword
        })

        if(newUser)
        {
               generateToken(newUser._id,res);
               await newUser.save();

               res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                email : newUser.email,
                profilepic : newUser.profilepic,
               })
        }
        else
        {

        }
    }catch(error)
    {
        console.log("Error is signup controller", error.message);
        res.status(500).json({
            message: "interna server message"
        })
    }
}

export const login = (req,res) =>{
    res.send("login route ")
}

export const logout = (req,res) =>{
    res.send("logout route ")
};