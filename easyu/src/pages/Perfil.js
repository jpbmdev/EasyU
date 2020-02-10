import React from 'react';

import camila from '../images/camila.jpg';

import '../css/maincss.css';

const Perfil = (props) => {
    return (
        <React.Fragment>
            <div class="text-center mt-5 mb-5">
                <h1 className="mainblue">Perfil del Aspirante</h1>
            </div>
            <div className="container">
                <div className="row justy-content-center text-center">
                    <div className="col col-lg-6">
                        <img className="rounded-circle" src={camila} style={{ width: '300px' }} />
                    </div>
                    <div className="col col-lg-6">
                        <h3 className="darkblue">Nombre:</h3>
                        <h4>Laura</h4>
                        <h3 className="darkblue">Apellidos:</h3>
                        <h4>Garcia Mendez</h4>
                        <h3 className="darkblue">Fecha de Nacimiento:</h3>
                        <h4>12/08/99</h4>
                        <h3 className="darkblue">Lugar:</h3>
                        <h4>Bogotá</h4>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-7">
                        <div class="jumbotron">
                            <h1 class="display-4">Tus avances:</h1>
                            <p class="lead">Universidad Javeriana</p>
                            <p class="lead">A continuación, se van a mostrar en tu preparación para medicina:</p>
                            <hr class="my-4" />
                            <p>Prueba de conocimientos básicos: </p>
                            <div class="progress mb-5">
                                <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <p>Prueba de técnicas de cirugía: </p>
                            <div class="progress mb-5">
                                <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            </div>
                            <a class="btn btn-primary btn-lg" href="#" role="button">Mas Pruebas</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Perfil;