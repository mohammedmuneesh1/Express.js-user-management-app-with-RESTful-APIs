const {users} = require('../models/userModel')

module.exports = {
    createUser:(req,res)=>{
        //getting data from post request and destructuring into name,email.username is equal to const user = { id: users.length + 1, name, email, username };
        
        const {name,email,username}=req.body
        const user = { id: users.length + 1, name, email, username };
        users.push(user);
        res.status(201).json({message:"created successfully"})
    },
    getAllUsers:(req,res)=>{
        res.json(users)
    },
    getUserById:(req,res)=>{
        const uid= parseInt(req.params.id);
        const user = users.find(value=> value.id === uid)
        if(user){
            res.json(user)
        }
        else{
            res.status(404).json({message:"user not found"})
        }
    },
    updateUser:(req,res)=>{
        const uid = parseInt(req.params.id);
        const user = users.find(value=>value.id === uid)
        if(user){
            user.name = req.body.name || user.name
            user.username = req.body.name || user.username
            user.email = req.body.email || user.email
            res.json(user)

        }
        else{
            res.status(404).json({message:"user not found"})
        }

    },
    deleteUser:(req,res)=>{
        const uid = parseInt(req.params.id);
        const uIndex = users.findIndex(value=> value.id === uid) 
        if(uIndex !== -1){
            const dUser = users.splice(uIndex,1)[0]  
            res.json({message:dUser})   //deleteduser details
        } 
        else{
            res.status(404).json({message:"user not found"})
        }            
    },






    get:(req,res)=>{
        res.send("user:hello world")
    }












}
