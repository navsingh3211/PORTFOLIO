import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import {generateToken} from '../utils/jwt.util.js';
import MESSAGES from '../utils/commonMessage.util.js';
import {apiresponse,authenticationResponse} from '../utils/commonResponse.util.js';


/*
  ==>user registration api
  ==>steps:
      1.)existing user check
      2.)Hashed password
      3.)User creation
      4.)Token generation
*/
const signUpService = async(req,res)=>{
    try{

        let body=req.body;

        const isUserExit = await User.findOne({username:body.username,email:body.email,status:true});
        if(isUserExit){
            return await apiresponse(false, MESSAGES.USER_ALREADY_EXIT,401);
        }
        let hashedPassword = await bcrypt.hash(body.password, 10);
        //  console.log('rom rom bhaiyo',hashedPassword);
        // process.exit(0)
        const bodyData = {
            username:body.username,
            password:hashedPassword,
            name:body.name,
            email:body.email,
            mobile:body.mobile
        };

        const account = await User.create(bodyData);
        const jwtToken = generateToken({
            id: account._id,
            username: account.username,
            email: account.email
        });
        return await authenticationResponse(true, MESSAGES.USER_SIGNUP_COMPLETE, {}, {
                accessToken: jwtToken,
                username: account ? account.username : "",
                userid: account._id,
                email: account.email
            });
    }catch(error){
        console.log(error);
        return await apiresponse(false, MESSAGES.SOMETHING_WRONG);
    }
}

export default {
  signUpService
}

