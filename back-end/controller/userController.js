
const User = require("../models/user");
const jwt = require('jsonwebtoken')


// login functionality
//notify user of incorrect credential
exports.login = async (req, res) => {
    let {email, password} = req.body


    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    email = email.toLowerCase()
 

    const exists = await User.findOne({email: email})
    if(!exists){
        return res.status(400).json({ message: "User does not exists" })
    }

    const isPassword = await exists.comparePassword(password)

    if(!isPassword){
        return res.status(400).json({ message: "Wrong password" })

    }

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "email": exists.email,
                "roles":[ "user"]
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
      
    )

    res.cookie('jwt', {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
    })
console.log(accessToken)
    return res.json(accessToken)



};

exports.logout =  async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}

//sign up functionality
//notify user of duplicate username
exports.signUp = async (req, res) => {
    let user = new User(req.body);

        // confirm personal data
    if (!user.firstname || !user.lastname  || !user.password || !user.email) {
        return res.status(400).json({ message: "All field are required" })
    }
        user.email = user.email.toLowerCase()
     
        //confirm duplicate
     const isDuplicate = await User.findOne({ email: user.email })
     if (isDuplicate) {
         return res.status(400).json({ message: "User with email already exists" })
 
     }

    const isSaved = await user.save()
    if(isSaved){
        res.status(201).json({ message: `The user  ${user.firstname + " "+ user.lastname} has been created successfully` })
    }
    else{
        res.status(400).json({ message: 'Invalid data recived' })

    }

};