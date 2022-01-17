import { reject } from 'bcrypt/promises';
import userService from '../services/userService'
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            messageCode: 'not empty input',

        })
    }
    let userData = await userService.handleUserLogin(email, password)
    return res.status(200).json({
        error: userData.errorCode,
        message: userData.messageCode,
        userdata: userData.user ? userData.user : { 'user': 'user not found' },
    })

}



module.exports = {
    handleLogin: handleLogin
}