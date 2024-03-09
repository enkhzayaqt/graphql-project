import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage({setLoggedUser}){
    const [email, setEmail] = useState("emma@gmail.com");
    const [password, setPassword] = useState("1234");
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const user = await LoginPage(email, password);
        const mockUser = {
            id: "jshgsdklsa",
            email: "emma@gmail.com"
        }
        if(mockUser){
            setLoggedUser(mockUser)
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