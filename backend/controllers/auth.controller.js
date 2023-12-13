
import authMaster from '../services/auth.service.js';

export const signUp = async (req,res,next) => {
  try {
    const data = await authMaster.signUpService(req, res);
    console.log(data);
    res.status(data.code).json({
      success: data.success,
      code: data.code,
      data: data.data,
      message: data.message
    });
  } catch (error) {
    next(error);
  }
}
