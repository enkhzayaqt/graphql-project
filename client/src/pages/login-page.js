import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../lib/authorization";

export default function LoginPage({setLoggedUser}){
    const [email, setEmail] = useState("emma@gmail.com");
    const [password, setPassword] = useState("1234");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = await login(email, password)
        if(user){
            setLoggedUser(user)
            navigate("/")
        }
    }
    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <div>Email: </div>
                <div>
                    <input onChange={event => setEmail(event.target.value)} type="email" value={email} required/>
                </div>
                <div>Password:</div>
                <div>
                    <input onChange={event => setPassword(event.target.value)} type="password" value={password} required/>
                </div>
                <button className="button is-link" type="submit">Login</button>
            </form>
        </div>
    )
}