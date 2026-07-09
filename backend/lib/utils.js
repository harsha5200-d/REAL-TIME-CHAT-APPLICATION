import jwt from "jsonwebtoken"

export const generateToken = (userid,res) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })

    res.cookie("jwt", token,{

        maxAge : 7* 24 * 60 * 60 * 100,
        httpOnly : true,
        samesite : "strict",
        secure:process.env.NODE_ENV !== "development",
    });

    return token;
}