const bcrypt = require('bcrypt') 
const firebase = require('./../config/firebase')
const Iuser= require('./../interfaces/user.interface')

class User extends Iuser {
    constructor (email, password) {
        super()
        this.email = email 
        this.password = password
    }

    static async createUser (email, password) {
        // Codigo para crear un usuario
    }

    static async findByEmail (email) {
        // Codigo para buscar por correo
    }

    async verifyPassword (password) {
        // Verificar password
    }

}

module.exports = User