const mongoose = require('../../config/mongoose');
const Schema = mongoose.Schema;
const Bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: String,
    profile_pic: {type: String, default: null},
    email: String,
    password: String,
},{ 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

UserSchema.pre("save", function(next) {

    if(!this.isModified("password")) {
        return next();
    }

    this.password = Bcrypt.hashSync(this.password, 10);

    next();
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = { UserSchema, UserModel }