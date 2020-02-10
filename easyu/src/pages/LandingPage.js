import React from 'react';
import { Link } from 'react-router-dom';

import publiandes from '../images/publi_andes.jpg';
import publijave from '../images/publi_jave.jpg';
import publisabana from '../images/publi_sabana.jpg';
import espaciocarta from '../images/EspacioImagenCarta.png';

import '../css/maincss.css';

const LandingPage = (props) => {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={publiandes} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={publijave} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={publisabana} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="text-center mt-5 mb-5">
                <h1 className="mainblue">Nuestros Servicios</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Universidades</h5>
                                <p class="card-text">Fácil acceso a la información de todas las universidades que desees.</p>
                                <Link className="nav-item active" to="/Universidades">
                                    <button className="btn btn-primary">Acceder</button>
                                </Link>
        
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tendencias</h5>
                                <p class="card-text">Ten acceso a lo más novedoso y buscado en cuanto a carreras y maestrías.</p>
                                <Link className="nav-item active" to="/Tendencias">
                                    <button className="btn btn-primary">Acceder</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Estadísticas</h5>
                                <p class="card-text">Compara información de las universidades para elegir mejor.</p>
                                <Link className="nav-item active" to="/Estadísticas">
                                    <button className="btn btn-primary">Acceder</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ayudas</h5>
                                <p class="card-text">Ayudas de todo tipo para que tu sueño de entrar a la U sea real.</p>
                                <Link className="nav-item active" to="/Ayudas">
                                    <button className="btn btn-primary">Acceder</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;