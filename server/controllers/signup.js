import User from './../models/User.js';

//register
const register = async (req, res)=>{

    const {name, email, password, mobileNo, role} = req.body;

    const user = new User({
        name,
        email,
        password,
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