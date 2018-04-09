const mongoose = require('mongoose') ;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],
    friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;