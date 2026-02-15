import bcrypt, { hash } from 'bcryptjs';
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

    res.json({
        success: true,
        message: "Login successful"
    });
};

export { registerApi, loginApi };

