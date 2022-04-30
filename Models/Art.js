const mongoose = require('mongoose')

const ArtScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        maxLength: [20, 'Title must be less than 20 characters'],
        trim: true,
    },

    description: String,
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than 0'],
    },
    love: {
        type: Number,
        default: 0,
    },
    watch: {
        type: Number,
        default: 0,
    },
    imgUrl: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    categories: [
        {
            type: String,
        },
    ],
})

module.exports = mongoose.models?.Art || mongoose.model('Art', ArtScheme)
