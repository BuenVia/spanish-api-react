import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <a className="n-brand" href="/">BuenVia API</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/documentation">Documentation</Link>
                <Link className="nav-link" to="/topics">Topics</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}