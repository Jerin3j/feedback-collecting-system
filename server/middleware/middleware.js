const authMiddleware = (req, res,next) =>{
  const authHead = req.headers

  const token = authHead.split("")

  const decodeToken = jwt.verify(token, jwt_secret);
    req.user = decodeToken

    // next();
    res.json({message})
    
}


module.exports = { authMiddleware }