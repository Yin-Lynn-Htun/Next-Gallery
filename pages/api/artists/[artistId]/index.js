const handler = async (req, res) => {
    console.log(req.query)
    return res.status(200).send({ message: 'Create a profile', data: req.body })
}

export default handler
