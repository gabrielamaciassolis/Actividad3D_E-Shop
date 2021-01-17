import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
  //##Todo @me this expire should be shorter 15 minutes maybe
}

export default generateToken
