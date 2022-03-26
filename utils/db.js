const mongoose = require('mongoose')

const connection = {}

export const connectToDb = async () => {
    if (connection.connected) return

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        connection.connected = true
    } catch (err) {
        throw new Error('Connection to database failed')
    }
}
