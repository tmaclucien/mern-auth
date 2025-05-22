import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true})


// .env 中存储的链接mongodb的地址需要添加指定的database name， 否则会自动创建新的数据库。当前想再去mern_auth数据库中下的users表中新建用户
// MONGO_URL=mongodb+srv://tmaclucien:LiHui546686!@mern-auth.ec3xykq.mongodb.net/<database_name>
const User = mongoose.model('User', userSchema)

export default User;