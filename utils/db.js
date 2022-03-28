const mongoose = require('mongoose')

const connection = {}

export const connectToDb = async () => {
    if (connection.isConnected) return

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        connection.isConnected = db.connections[0].readyState
    } catch (err) {
        throw new Error('Connection to database failed')
    }
}
