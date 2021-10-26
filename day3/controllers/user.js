const User = require('../models/user')

module.exports.getAll = async (req, res)=>{
    User.find()
    .then((user)=>{
        res.status(200).json(user)
    })
    .catch(err =>{
        res.status(500).json({message : err.message})
    })
}

module.exports.addUser = async(req, res)=>{
    const {userName, email, phone, role} = req.body
    if(!userName || !email || !phone || !role ){
        return res.status(400).json('All fields required')
    }else{
        User.findOne({email : email}).then((user)=>{
            if(user){
                return res.status(400).json({message : ' user already registered'})
            }else{
                const newUser = new User({
                    userName : userName,
                    email : email,
                    phone : phone,
                    role : role
                })
                newUser.save()
                .then((user)=>{
                    res.status(200).json({user : user, message : 'user saved successfully'})
                })
                .catch(err =>{
                    res.status(500).json({message: err.message})
                })
            }
        })
    }
}

module.exports.getOneUser = async(req, res)=>{
    const id = req.params.id
    User.findById(id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(err =>{
        res.status(500).json({message : err.message})
    })
}

module.exports.updateOneUser = async(req, res)=>{
    const id = req.params.id
    User.findByIdAndUpdate(id, req.body, {useFindandModify : false})
    .then(()=>{
        res.status(200).json({message: "user details updated successfully"})
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
}

module.exports.deleteAllUser = async(req, res)=>{
    User.deleteMany()
    .then(()=>{
        res.status(200).json({message : "all user deleted"})
    })
    .catch(er =>{
        res.status(500).json({message : err.message})
    })
}

module.exports.deleteOneUser = async(req, res)=>{
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({message : "user delete successfully"})
    })
    .catch(err =>{
        res.status(500).json({message : err.message})
    })
}