import { Link } from "react-router-dom"

export default function NavBar({loggedUser}){
    const isLogged = Boolean(loggedUser)
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
            <a className="navbar-item">Log out</a>
            </div>): (<div>no user</div>)}
        </nav>
    )
}