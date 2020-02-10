import React from 'react';

import unback from '../images/unback.png';
import logoC from '../images/LogoC.jpg';

import '../css/maincss.css';

const Carreras = (props) => {
    return (
        <React.Fragment>
            <img src={unback} alt="" style={{ width: '100%' }} />
            <div class="text-center mt-5 mb-5">
                <h1>Universidad Nacional de Colombia </h1>
                <h1 className="mainblue">Carreras</h1>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Historia</button>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Ranking</button>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Campus</button>
            </div>
            <div class="d-flex justify-content-center">
                <form class="form-inline my-2 my-lg-0 mr-3">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <ul class="list-unstyled">
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px' }} />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Carrea 1</h5>
                                    <button className="btn btn-primary btn-sm my-1" to="">Mas información</button>
                                    <br />
                                    La Universidad Nacional de Colombia (UNAL) es una universidad pública colombiana del orden nacional, fundada bajo el gobierno de Santos Acosta el 22 de septiembre de 1867 y regentada por la Ley 66 de 1867. Es la universidad más importante y representativa de Colombia por su tradición, prestigio, calidad y selectividad.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Carrea 2</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                 </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Carrea 3</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Carrea 4</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Carrea 4</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Carreras;