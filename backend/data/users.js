import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234'),
        isAdmin: true 
    },
    {
        name: 'Yashraj',
        email: 'yashthorat@gmail.com',
        password: bcrypt.hashSync('2345'),
    },
    {
        name: 'Pranav',
        email: 'Pranavnangare@gmail.com',
        password: bcrypt.hashSync('2345'),
    },
]

export default users;