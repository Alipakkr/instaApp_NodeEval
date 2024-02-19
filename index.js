const express=require("express")
const bodyParser=require("bodyParser")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const app=express();
app.use(bodyParser.json());
const userDB=[];
const blacklistedTokens=[];
const key="yourKey";
app.post("/api/users",async(req,res)=>{
    const{username,email,password,city, age ,gender}=req.body;
    const existingUser=userDB.find((user)=>user.email===email);i
    if(existingUser){
        return res.status(400).json({error:"user is already existed"})
    }
    const Hashpassword=await bcrypt.hash(password,5);
    const newUser={username,
        email,
        password:Hashpassword,
        city,
        age,
        gender,
    };
    userDB.push(newUser);
    res.status(201).json({message:" Thanks ! User is added  " })
})