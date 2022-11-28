import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <a class="n-brand" href="/">BuenVia API</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/documentation">Documentation</Link>
                <Link class="nav-link" to="/topics">Topics</Link>
                <Link class="nav-link" to="/admin">Admin</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}