import React from 'react';
import { Link } from 'react-router-dom';

import camila from '../images/camila.jpg';
import easyu from '../images/easyu.png';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <img src={easyu} alt="..." className="mr-5" style={{ height: '70px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-3">
                        <Link className="nav-item active" to="/Universidades">
                            <p className="nav-link">Universidades</p>
                        </Link>
                        <Link className="nav-item active" to="/Tendencias">
                            <p className="nav-link">Tendencias</p>
                        </Link>
                        <Link className="nav-item active" to="/Estadísticas">
                            <p className="nav-link">Estadísticas</p>
                        </Link>
                        <Link className="nav-item active" to="/Ayudas">
                            <p className="nav-link">Ayudas</p>
                        </Link>
                    </ul>
                    <form class="form-inline my-2 my-lg-0 mr-3">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                    <Link to="/Perfil">
                        <img src={camila} alt="..." className="rounded-circle" style={{ height: '60px' }} />
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;