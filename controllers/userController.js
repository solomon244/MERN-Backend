//user register
const register = (req, res)=>{
    res.json({message : "user registered"});
};

// user login

const login = (req, res) =>{
    res.json({message : "user login"});
};
//profile

const getprofile = (req, res) =>{
    res.json({message : "profile viewed"})
}

module.exports = {register, login, getprofile}