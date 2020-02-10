import React from 'react';

import sistemasback from '../images/sistemasback.jpg';
import logoC from '../images/LogoC.jpg';
import '../css/maincss.css';

const Carrera = (props) => {
    return (
        <React.Fragment>
            <img src={sistemasback} alt="" style={{ width: '100%' }} />
            <div class="text-center mt-5 mb-5">
                <h1>Universidad Nacional de Colombia </h1>
                <h1 className="mainblue">Ingeniería de Sistemas</h1>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Objeticos</button>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Recursos</button>
                <button class="btn btn-outline-info my-3 mx-5" type="submit">Profesores</button>
                <p className="p-5">El propósito de la Ingeniería de Sistemas es modelar e implementar sistemas complejos, la Ingeniería de Sistemas integra otras disciplinas, aplica las ciencias matemáticas y ciencias de la computación para el desarrollo de los Sistemas. Los aspectos más relevantes que involucra la ciencia de la computación son: las teorías de información y comunicación, la teoría de la complejidad computacional, la teoría de lenguajes de programación, la programación de computadoras y las teorías de sistemas.

El programa Ingeniería de Sistemas de la Universidad Nacional de Colombia cuenta con un plan de estudios en créditos, actual, flexible, que promueve la formación integral y la autonomía, el claro sentido de pertenencia y excelentes resultados en diferentes ámbitos, de estudiantes y egresados, además de la dedicación en las labores de docencia, investigación y extensión de los profesores del programa, constituyen evidencias de la calidad del programa de Ingeniería de sistemas y la solidez institucional de la Universidad Nacional de Colombia.</p>
            </div>
            <div class="text-center mt-5 mb-5 mx-5">
                <button type="button" class="btn btn-primary btn-lg btn-block px-5">Realizar Test</button>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <ul class="list-unstyled">
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." style={{ height: '100px', width: '100px' }} />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Maestrías a fin </h5>
                                    <button className="btn btn-primary btn-sm my-1" to="/Carrera">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Plan de Estudios</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                 </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Casos de Éxito</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Indices de Materias</h5>
                                    <button className="btn btn-primary btn-sm my-1">Mas información</button>
                                    <br />
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </div>
                            </li>
                            <li class="media my-4">
                                <img src={logoC} class="mr-3" alt="..." />
                                <div class="media-body">
                                    <h5 class="mt-0 mb-1">Enfoques</h5>
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

export default Carrera;