const bcrypt = require('bcryptjs')

export const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, 8)
    return hashedPassword
}

export const isPasswordValid = async (password, hashedPassword) => {
    const isValid = await bcrypt.compareSync(password, hashedPassword)
    return isValid
}
