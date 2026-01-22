import jwt from 'jsonwebtoken'

/**
 * @desc Generate JWT token
 * @param {*} res 
 * @param {*} userId 
 */
const generateToken = (res, userId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRECT, {expiresIn: '1d'})
  res.cookie('Access-Token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1*24*60*60*1000 // 1 day
  })
}

export default generateToken;