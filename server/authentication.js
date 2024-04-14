import {getUserByEmail} from "./controllers/user"
import jwt from 'jsonwebtoken'

const secret = 'sdfgakjgsfpoqhguovsdgdvkj74972halhf'

export async function handleLogin(req, res){
    const {email, password} = req.body;
    const user = await getUserByEmail(email);
    if(!user || user.password !== password){
        return res.sendStatus(401) // Unauthorized response status 
    }
    const data =  {sub: user.id, email: user.email};
    const token = jwt.sign(data, secret);

    console.log(req.body);
    res.json({token: token})
}