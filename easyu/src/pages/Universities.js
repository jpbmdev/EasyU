import React from 'react';
import { Link } from 'react-router-dom';

import blue from '../images/blueback.jpg';
import logou from '../images/LogoU.jpg';
import unlogo from '../images/unlogo.png';

import '../css/maincss.css';

const Universities = (props) => {
    return (
        <React.Fragment>
            <img src={blue} alt="" style={{ width: '100%' }} />
            <div class="text-center mt-5 mb-5">
                <h1 className="mainblue">Universidades</h1>
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
                                <img src={unlogo} class="mr-3" alt="..." style={{height: '100px'}}/>
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Universidad Nacional de Colombia</h5>
                                    <Link className="btn btn-primary btn-sm my-1" to="/Carreras">Mas información</Link>
                                    <br/>
                                    La Universidad Nacional de Colombia (UNAL) es una universidad pública colombiana del orden nacional, fundada bajo el gobierno de Santos Acosta el 22 de septiembre de 1867 y regentada por la Ley 66 de 1867. Es la universidad más importante y representativa de Colombia por su tradición, prestigio, calidad y selectividad. 
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logou} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Universidad 1</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br/>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                 </div>
                            </li>
                            <li class="media my-4">
                                <img src={logou} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Universidad 2</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br/>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logou} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Universidad 3</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br/>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logou} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Universidad 4</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br/>
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

export default Universities;