import bcrypt, { hash } from 'bcryptjs';
import User from './../models/User.js';
import brcypt from 'bcryptjs';
//register
const register = async (req, res)=>{

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

export default register