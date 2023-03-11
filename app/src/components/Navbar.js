import pokemon from "../imgs/pokemon-logo.png"

function Navbar({ setPage }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className="nav-logo" src={pokemon} alt="pokemonlogo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button id="navbuttons" onClick={() => setPage('splash')} type="button" className="btn btn-dark">Home</button>
                            </li>
                            <li className="nav-item">
                                <button id="navbuttons" onClick={() => setPage('about')} type="button" className="btn btn-dark">About</button>
                            </li>
                            <li className="nav-item">
                                <button id="navbuttons" onClick={() => setPage('pokelist')} type="button" className="btn btn-dark">PokeList</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;