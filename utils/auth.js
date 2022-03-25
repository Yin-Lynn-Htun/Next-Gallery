const bcrypt = require('bcryptjs')

export const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 8)
    return hashedPassword
}
