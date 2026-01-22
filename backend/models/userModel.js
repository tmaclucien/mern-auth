import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {
    timestamps: true, 
    strict: false // 允许未定义的字段
}) 

/**
 * hash password before saving the user at the schema pre hook
 */
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

/**
 * 自定义方法，用于比较密码
 */
userSchema.methods.matchPassword = async function(currentPassword) {
    return await bcrypt.compare(currentPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User;