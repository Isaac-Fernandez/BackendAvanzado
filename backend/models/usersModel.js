const mongoose = require ("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Por favor teclea tu nombre" ]
    },
    email: {
        type: String,
        require: [true, "Por favor teclea tu email" ],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Por favor teclea tu password" ],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)