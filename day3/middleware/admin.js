const jwt = require('jsonwebtoken')
const User = require('../models/user')


module.exports = (req, res, next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(400).json({message : 'You must have to logged in'})
    }else{
        const token = authorization.replace("Bearer", "")
        jwt.verify(token, process.env.JWT_KEY, (err, payLoad)=>{
            if (err){
                throw err;
            }else{
                const _id = req._id
                User.findById(_id).then((userData)=>{
                    if(userData.role == "admin"){
                        res.user = userData
                        next();
                    }else{
                        return res.status(400).json({message : "You are not authorized"})
                    }
                })
            }
        })
    }
}