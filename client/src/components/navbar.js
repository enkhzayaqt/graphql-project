import { Link, useNavigate } from "react-router-dom"

export default function NavBar({loggedUser, setLoggedUser}){
    const isLogged = Boolean(loggedUser);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedUser(null);
        navigate('/')
    }
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <Link className="navbar-item" to="/"> 
                Job posts
                </Link>
            </div>
            {isLogged? (
            <div className="navbar-item">{loggedUser.email} is Logged
            <Link className="navbar-item" to='/jobs/new'>Add job post</Link>
            <a className="navbar-item" onClick={handleLogout}>Log out</a>
            </div>): (
            <div>
                <Link className="navbar-item" to='/login'>Login</Link>
            </div>)}
        </nav>
    )
}