const { MongoClient, ServerApiVersion } = require('mongodb')

export const connectToDb = async () => {
    const uri =
        'mongodb+srv://admin1:TestIng123@cluster0.l009c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    })
    await client.connect()
    return client
}
