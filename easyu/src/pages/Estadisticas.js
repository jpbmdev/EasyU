import React from 'react';

import logoC from '../images/LogoC.jpg';
import img1 from '../images/EmpWeb_Ranking.jpg';
import img2 from '../images/salarios.jpg';

import '../css/maincss.css';

const Estadisticas = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="mainblue">Ultimo en Estadísticas</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={img1} alt="lol" style={{ width: '100%' }} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={img2} alt="lol" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1 className="mainblue">Top's</h1>
                    </div>
                    <div className="col col-lg-6 ">
                        <h2>Top 10 Carreras con mayor porcentaje de graduados</h2>
                        <ul class="list-unstyled">
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 1</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 2</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 3</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 4</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-lg-6">
                        <h2>Top 10 Universidades con menor deserción</h2>
                        <ul class="list-unstyled">
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 1</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 2</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 3</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="my-0">Carrera 4</h5>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Estadisticas;