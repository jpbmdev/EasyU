import React from 'react';

import espaciocarta from '../images/EspacioImagenCarta.png';
import tendencias from '../images/tendencias.jpg';

const Trending = (props) => {
    return (
        <React.Fragment>
            <img src={tendencias} alt="" style={{ width: '100%' }} />
            <div class="text-center mt-5 mb-5">
                <h1 className="mainblue">Lo último en Tendencias</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ciencias de la Computación</h5>
                                <p class="card-text">Universidad Nacional</p>
                                <a className="nav-item active" to="/Universidades">
                                    <button className="btn btn-primary">Acceder</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Ingeniera Biomédica</h5>
                                <p class="card-text">Universidad de los Andes</p>
                                <a className="nav-item active" to="/Tendencias">
                                    <button className="btn btn-primary">Mas información</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Estadística</h5>
                                <p class="card-text">Universidad Javeriana</p>
                                <a className="nav-item active" to="/Estadísticas">
                                    <button className="btn btn-primary">Mas información</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div class="card">
                            <img src={espaciocarta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hotelería y turismo</h5>
                                <p class="card-text">Universidad Externado</p>
                                <a className="nav-item active" to="/Ayudas">
                                    <button className="btn btn-primary">Mas información</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Trending;