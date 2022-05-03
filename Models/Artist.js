const mongoose = require('mongoose')

const ArtistScheme = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        maxLength: [20, 'Username must be less than 20 characters'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message: (props) => `${props.value} is not a valid email!`,
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password must be at least 8 characters'],
        trim: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    popularity: {
        type: Number,
        default: 0,
    },
    socials: {
        website: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        },
    },
    isArtist: {
        type: Boolean,
        default: false,
    },
})

module.exports =
    mongoose.models?.Artist || mongoose.model('Artist', ArtistScheme)
