import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import genToken from '../config/token.js'


export const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        let existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "User already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }
        let hashPassword = await bcrypt.hash(password, 10)
        let newUser = await User.create({
            name,
            email,
            password: hashPassword,
            role
        })
        let token = await genToken(newUser._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({ user: newUser })  

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: `Sign Up Error: ${error}` })
    }
}






export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        let  token= await genToken(user._id)
res.cookie("token", token, {
    httpOnly: true,
    secure:false,
    sameSite:"strict",
    maxAge: 7 * 24 * 60 * 60 * 1000
})
return  res.json({
            message: "Login successful",
            user: user
        })   

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: `Login Error: ${error}` })
    }           
}




export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "Logged out successfully" })
    }           
        catch (error) {     
        console.error(error)
        res.status(500).json({ message: `Logout Error: ${error}` })
    }
}

export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        // TODO: Generate reset token and send email
        res.json({ message: "Reset link sent to your email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}  