const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (req, res, next)=>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(400).json({message : 'You must have to logged In'})
    }else{
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, process.env.JWT_KEY, (err, payload)=>{
            if(err){
                throw err
            }else{
                const _id = payload._id
                User.findById(_id).then((userData)=>{
                    req.user = userData
                    next();
                })
            }
        })
    }
}