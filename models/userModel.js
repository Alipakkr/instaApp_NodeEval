const bcrypt = require('bcrypt');
const userDB = [];
class User {
    constructor(username, email, password, city, age, gender) {
        this.username = username;
        this.email = email;
        this.city = city;
        this.password = password;
        this.gender = gender;
        this.age = age;

    }
}
const addUsers = async (username, email, password, city, age, gender) => {
    const existingUser = userDB.find((User) => userDB.email === email);
    if (existingUser) {
        return res.status(400).json({ error: "user is already exitsted" })
    }
    const Hashpassword = await bcrypt.hash(password, 5);
    const Newuser = new User(username, email, Hashpassword, city, age, gender);
    userDB.push(Newuser);
};
module.exports={addUsers};