'use strict'

const User = use("app/Models/User")

class AuthController {
    async register({request}){
        const data = request.only(['username','email', "data de nascimento"]);
        const user = await User.create(this.data);
        return user;
    }
    async aunthenticate({request, auth}){
        const {username, email} = request.all();
        const token = await auth.attempt(username, email);
        return token;
    }
}

module.exports = AuthController
