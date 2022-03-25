const bcrypt = require('bcryptjs')

export const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 8)
    return hashedPassword
}

export const isPasswordValid = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}
