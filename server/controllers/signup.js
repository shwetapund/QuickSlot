import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './../models/User.js';

//register
const registerApi = async (req, res)=>{

    const {name, email, password, mobileNo, role} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashPassword,
        mobileNo,
        role
    });
    try{
    const saveUser = await user.save();

    res.json({
         success: true,
         data: saveUser,
         message: 'user register successfully'
        });
    }
    catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }

}

//login
const loginApi = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            message: "Wrong password"
        });
    }

    //access token
    const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m"}
    );

    //refresh token
    const refreshToken = jwt.sign(
        { id:user._id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d"}
    );
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true
    });

    res.json({
        accessToken
    });
    // res.json({
    //     success: true,
    //     message: "Login successful"
    // });
    
};

const refreshTokenHandler = (req,res)=>{
     const token = req.cookies.refreshToken;

    if(!token){
        return res.status(403).json({
            message: "No refresh token"
        });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

        const newAccessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: "15m" }
        );
        res.json({
            accessToken: newAccessToken
        });
    } catch(e){
        res.status(403).json({ message: "Invaild refresh token"});
    }
};

export { registerApi, loginApi, refreshTokenHandler };

