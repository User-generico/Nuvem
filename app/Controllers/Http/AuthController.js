'use strict'

const User = use("App/Models/User")

class AuthController {
    async register({request}){
        const data = request.only(['username','email', 'data']);
        const user = await User.create(data);
        return user;
    }
    async authenticate({request, auth}){
        const {username, email} = request.all();
        const token = await auth.attempt(username, email);
        return token;
    }
}

module.exports = AuthController
