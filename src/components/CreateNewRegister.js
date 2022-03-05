import React, { useEffect } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const CreateNewRegister = () => {
    const navigate = useNavigate()

    return (

        <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Nav />
                    <div className="row p-3">
                        <div className="col-md-12">
                            <button className="btn btn-outline-secondary m-3" onClick={() => { navigate('/list', { replace: true }); }}>
                                <i className="fas fa-arrow-left  text-gray-400"></i>&nbsp;
                                Listar
                            </button>
                            <button className="btn btn-primary m-3" onClick={() => { navigate('/quotes-details/routes/', { replace: true }); }}>
                                Salarios &nbsp;
                                <i className="fas fa-arrow-right  text-gray-400"></i>

                            </button>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Ingresos</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">1- Salarios y otras Remuneraciones con retención</label>
                                            <input type="text" className="form-control" placeholder="Salarios y otras Remuneraciones con retención" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">2- Otras remuneraciones personales sin retención</label>
                                            <input type="text" className="form-control" placeholder="Otras remuneraciones personales sin retención" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">3- Ingresos en Especies</label>
                                            <input type="text" className="form-control" placeholder="Ingresos en Especies" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">4- Gastos de Representación</label>
                                            <input type="text" className="form-control" placeholder="Gastos de Representación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">5- Dietas</label>
                                            <input type="text" className="form-control" placeholder="Dietas" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Ingresos por Actividad y/o Profesión</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">6- Actividad Agropecuaria</label>
                                            <input type="text" className="form-control" placeholder="Actividad Agropecuaria" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">7- Honorarios por Comisiones</label>
                                            <input type="text" className="form-control" placeholder="Honorarios por Comisiones" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">8- Honorarios por Servicios Profesionales</label>
                                            <input type="text" className="form-control" placeholder="Honorarios por Servicios Profesionales" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">9- Alquiler Habitacional</label>
                                            <input type="text" className="form-control" placeholder="Alquiler Habitacional" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">10- Alquiler Comercial</label>
                                            <input type="text" className="form-control" placeholder="Alquiler Comercial" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">11- Intereses y otros Ingresos Financieros</label>
                                            <input type="text" className="form-control" placeholder="Intereses y otros Ingresos Financieros" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">12- Ganancia de cap.- valores o bienes muebles antes ley 18/2006</label>
                                            <input type="text" className="form-control" placeholder="Ganancia de cap.- valores o bienes muebles antes ley 18/2006" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">13- Otros Ingresos</label>
                                            <input type="text" className="form-control" placeholder="Otros Ingresos" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">14- Ventas y Prestación de Servicios</label>
                                            <input type="text" className="form-control" placeholder="Ventas y Prestación de Servicios" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">15- Menos: Devoluciones y Descuentos</label>
                                            <input type="text" className="form-control" placeholder="Menos: Devoluciones y Descuentos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">16- Total de Ingresos</label>
                                            <input type="text" className="form-control" placeholder="Total de Ingresos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">17- Menos Ingresos: Exentos y/o no Gravables</label>
                                            <input type="text" className="form-control" placeholder="Menos Ingresos: Exentos y/o no Gravables" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">18- Fuente Extranjera</label>
                                            <input type="text" className="form-control" placeholder="Fuente Extranjera" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">19- Gastos de Representación</label>
                                            <input type="text" className="form-control" placeholder="Gastos de Representación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">20- Total de Ingresos Gravables</label>
                                            <input type="text" className="form-control" placeholder="Total de Ingresos Gravables" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Costos</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">21- Inventario Inicial</label>
                                            <input type="text" className="form-control" placeholder="Inventario Inicial" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">22- Compras - Locales</label>
                                            <input type="text" className="form-control" placeholder="Compras - Locales" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">23- Compras - Importadas</label>
                                            <input type="text" className="form-control" placeholder="Compras - Importadas" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">24- Salarios y otras Remuneraciones</label>
                                            <input type="text" className="form-control" placeholder="Salarios y otras Remuneraciones" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">25- Depreciación</label>
                                            <input type="text" className="form-control" placeholder="Depreciación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">26- Mantenimiento</label>
                                            <input type="text" className="form-control" placeholder="Mantenimiento" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">27- Electricidad, Agua y Teléfono</label>
                                            <input type="text" className="form-control" placeholder="Electricidad, Agua y Teléfono" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">28- Seguros</label>
                                            <input type="text" className="form-control" placeholder="Seguros" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">29- Otros Costos</label>
                                            <input type="text" className="form-control" placeholder="Otros Costos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">30- Menos: Inventario Final</label>
                                            <input type="text" className="form-control" placeholder="Menos: Inventario Final" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">31- Total de Costos</label>
                                            <input type="text" className="form-control" placeholder="Total de Costos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">32- Menos Costos: Exentos y/o no deducibles</label>
                                            <input type="text" className="form-control" placeholder="Menos Costos: Exentos y/o no deducibles" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">33- Fuente Extranjera</label>
                                            <input type="text" className="form-control" placeholder="Fuente Extranjera" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">34- Total de Costos Deducibles</label>
                                            <input type="text" className="form-control" placeholder="Total de Costos Deducibles" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Gastos</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">35- Salarios y otras Remuneraciones</label>
                                            <input type="text" className="form-control" placeholder="Salarios y otras Remuneraciones" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">36- Prestaciones Laborales</label>
                                            <input type="text" className="form-control" placeholder="Prestaciones Laborales" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">37- Atención y Promoción a Clientes</label>
                                            <input type="text" className="form-control" placeholder="Atención y Promoción a Clientes" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">38- Alquileres</label>
                                            <input type="text" className="form-control" placeholder="Alquileres" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">39- Transporte</label>
                                            <input type="text" className="form-control" placeholder="Transporte" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">40- Provisión para Cuentas Malas</label>
                                            <input type="text" className="form-control" placeholder="Provisión para Cuentas Malas" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">41- Cargos Bancarios</label>
                                            <input type="text" className="form-control" placeholder="Cargos Bancarios" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">42- Intereses y otros Gastos Financieros Netos</label>
                                            <input type="text" className="form-control" placeholder="Intereses y otros Gastos Financieros Netos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">43- Depreciación</label>
                                            <input type="text" className="form-control" placeholder="Depreciación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">44- Amortización</label>
                                            <input type="text" className="form-control" placeholder="Amortización" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">45- Impuestos</label>
                                            <input type="text" className="form-control" placeholder="Impuestos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">46- Honorarios por servicios profesionales y comisiones</label>
                                            <input type="text" className="form-control" placeholder="Honorarios por servicios profesionales y comisiones" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">47- Gastos de Oficina</label>
                                            <input type="text" className="form-control" placeholder="Gastos de Oficina" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">48- Gastos de Factoring</label>
                                            <input type="text" className="form-control" placeholder="Gastos de Factoring" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">49- Gastos por Ingresos en Especies</label>
                                            <input type="text" className="form-control" placeholder="Gastos por Ingresos en Especies" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">50- Donaciones al Estado</label>
                                            <input type="text" className="form-control" placeholder="Donaciones al Estado" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">51- Donaciones (literal c y e del Art. 16, D. E. 143 de 2005)</label>
                                            <input type="text" className="form-control" placeholder="Donaciones (literal c y e del Art. 16, D. E. 143 de 2005)" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">52- Donaciones (literal b, d y f del Art. 16, D. E. 143 de 2005)</label>
                                            <input type="text" className="form-control" placeholder="Donaciones (literal b, d y f del Art. 16, D. E. 143 de 2005)" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">53- Mantenimiento</label>
                                            <input type="text" className="form-control" placeholder="Mantenimiento" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">54- Electricidad, Agua y Teléfono</label>
                                            <input type="text" className="form-control" placeholder="Electricidad, Agua y Teléfono" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">55- Seguros</label>
                                            <input type="text" className="form-control" placeholder="Seguros" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">56- Otros Gastos</label>
                                            <input type="text" className="form-control" placeholder="Otros Gastos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">57- Total de Gastos</label>
                                            <input type="text" className="form-control" placeholder="Total de Gastos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">58- Menos: Gastos Exentos y/o no Deducibles</label>
                                            <input type="text" className="form-control" placeholder="Menos: Gastos Exentos y/o no Deducibles" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">59- Gastos de Fuente Extranjera</label>
                                            <input type="text" className="form-control" placeholder="Gastos de Fuente Extranjera" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">60- Total de Gastos Deducibles</label>
                                            <input type="text" className="form-control" placeholder="Total de Gastos Deducibles" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Activos</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">61- Caja y Bancos</label>
                                            <input type="text" className="form-control" placeholder="Caja y Bancos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">62- Cuentas por Cobrar</label>
                                            <input type="text" className="form-control" placeholder="Cuentas por Cobrar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">63- Cuentas por Cobrar a Otros</label>
                                            <input type="text" className="form-control" placeholder="Cuentas por Cobrar a Otros" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">64- Préstamos por cobrar</label>
                                            <input type="text" className="form-control" placeholder="Préstamos por cobrar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">65- Menos: Reserva para cuentas malas</label>
                                            <input type="text" className="form-control" placeholder="Menos: Reserva para cuentas malas" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">66- Inventario</label>
                                            <input type="text" className="form-control" placeholder="Inventario" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">67- Edificios y Mejoras</label>
                                            <input type="text" className="form-control" placeholder="Edificios y Mejoras" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">68- Terrenos</label>
                                            <input type="text" className="form-control" placeholder="Terrenos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">69- Maquinaria y Equipos</label>
                                            <input type="text" className="form-control" placeholder="Maquinaria y Equipos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">70- Mobiliario y Enseres</label>
                                            <input type="text" className="form-control" placeholder="Mobiliario y Enseres" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">71- Vehículo</label>
                                            <input type="text" className="form-control" placeholder="Vehículo" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">72- Menos: Depreciación Acumulada</label>
                                            <input type="text" className="form-control" placeholder="Menos: Depreciación Acumulada" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">73- Otros Activos</label>
                                            <input type="text" className="form-control" placeholder="Otros Activos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">74- Total de Activo</label>
                                            <input type="text" className="form-control" placeholder="Total de Activo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Pasivo</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">75- Cuenta por pagar</label>
                                            <input type="text" className="form-control" placeholder="Cuenta por pagar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">76- Préstamos por pagar</label>
                                            <input type="text" className="form-control" placeholder="Préstamos por pagar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">77- Reserva Varias</label>
                                            <input type="text" className="form-control" placeholder="Reserva Varias" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">

                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">79- Total de Pasivo</label>
                                            <input type="text" className="form-control" placeholder="Total de Pasivo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Capital o Patrimonio</h6>
                                </div>

                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">80- Total de Capital o Patrimonio</label>
                                            <input type="text" className="form-control" placeholder="Cuenta por pagar" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Aviso de Operación </h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">81- Impuesto a pagar de aviso de operación</label>
                                            <input type="text" className="form-control" placeholder="Impuesto a pagar de aviso de operación" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Renta gravable </h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">82- Renta gravable </label>
                                            <input type="text" className="form-control" placeholder="Renta gravable" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">83- Perdida </label>
                                            <input type="text" className="form-control" placeholder="Perdida" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Menos: Deducciones personales </h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">84- Deducción Básica </label>
                                            <input type="text" className="form-control" placeholder="Deducción Básica" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">85- Gastos Médicos </label>
                                            <input type="text" className="form-control" placeholder="Gastos Médicos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">86- Intereses Hipotecarios </label>
                                            <input type="text" className="form-control" placeholder="Intereses Hipotecarios" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">87- Intereses Préstamos Educativos </label>
                                            <input type="text" className="form-control" placeholder="Intereses Préstamos Educativos" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">88- Gastos Escolares </label>
                                            <input type="text" className="form-control" placeholder="Gastos Escolares" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">89- Gastos Escolares Discapacitados </label>
                                            <input type="text" className="form-control" placeholder="Gastos Escolares Discapacitados" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Menos: Arrastre de Pérdidas e Incentivos </h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">90- Menos: Arrastre de Pérdidas </label>
                                            <input type="text" className="form-control" placeholder="Menos: Arrastre de Pérdidas" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">91- Incentivo: Fondo de Jubilaciones </label>
                                            <input type="text" className="form-control" placeholder="Incentivo: Fondo de Jubilaciones" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">92- Reforestación </label>
                                            <input type="text" className="form-control" placeholder="Reforestación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">93- Discapacitados </label>
                                            <input type="text" className="form-control" placeholder="Discapacitados" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">94- Agropecuario </label>
                                            <input type="text" className="form-control" placeholder="Agropecuario" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">95- Turismo </label>
                                            <input type="text" className="form-control" placeholder="Turismo" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">96- Casco Antiguo </label>
                                            <input type="text" className="form-control" placeholder="Casco Antiguo" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">97- Otros Incentivos </label>
                                            <input type="text" className="form-control" placeholder="Otros Incentivos" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Renta Neta Gravable</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">98- Renta Neta Gravable </label>
                                            <input type="text" className="form-control" placeholder="Renta Neta Gravable" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">99- Pérdida Neta </label>
                                            <input type="text" className="form-control" placeholder="Pérdida Neta" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Liquidacion de Impuesto</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">100- Impuesto Causado </label>
                                            <input type="text" className="form-control" placeholder="Impuesto Causado" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">101- Impuesto por Gasto de Representación </label>
                                            <input type="text" className="form-control" placeholder="Impuesto por Gasto de Representación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">102- Menos: Impuesto pagados en enajenación de bienes inmuebles </label>
                                            <input type="text" className="form-control" placeholder="Menos: Impuesto pagados en enajenación de bienes inmuebles" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">103- Retenciones de Salarios</label>
                                            <input type="text" className="form-control" placeholder="Retenciones de Salarios" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">104- Crédito por Inversiones Directas - Ley 28/95</label>
                                            <input type="text" className="form-control" placeholder="Crédito por Inversiones Directas - Ley 28/95" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">105- Crédito Declaración Anterior </label>
                                            <input type="text" className="form-control" placeholder="Crédito Declaración Anterior" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">106- Retención del Gasto de Representación </label>
                                            <input type="text" className="form-control" placeholder="Retención del Gasto de Representación" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">107- Impuesto a Pagar </label>
                                            <input type="text" className="form-control" placeholder="Impuesto a Pagar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">108- Impuesto a favor </label>
                                            <input type="text" className="form-control" placeholder="Impuesto a favor" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Impuesto Estimado</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">109- Renta Neta Gravable Estimada </label>
                                            <input type="text" className="form-control" placeholder="Renta Neta Gravable Estimada" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">110- Impuesto Estimado</label>
                                            <input type="text" className="form-control" placeholder="Impuesto Estimado" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">111- Menos: Retenciones de Salarios</label>
                                            <input type="text" className="form-control" placeholder="Menos: Retenciones de Salarios" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">112- Crédito de Arrastre</label>
                                            <input type="text" className="form-control" placeholder="Crédito de Arrastre" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">113- Impuesto Estimado a Pagar</label>
                                            <input type="text" className="form-control" placeholder="Impuesto Estimado a Pagar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">114- Impuesto Estimado a Favor</label>
                                            <input type="text" className="form-control" placeholder="Impuesto Estimado a Favor" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Seguro Educativo</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">115- Base del Cálculo Seguro Educativo </label>
                                            <input type="text" className="form-control" placeholder="Base del Cálculo Seguro Educativo" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">116- Más: Ganancia de capital venta inmuebles </label>
                                            <input type="text" className="form-control" placeholder="Más: Ganancia de capital venta inmuebles" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">117- Ganancia de Capital venta de valores </label>
                                            <input type="text" className="form-control" placeholder="Ganancia de Capital venta de valores" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">118- Seguro Educativo a Pagar </label>
                                            <input type="text" className="form-control" placeholder="Seguro Educativo a Pagar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Cuotas CSS</h6>
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">119- Base del Cálculo para la cuota de la CSS </label>
                                            <input type="text" className="form-control" placeholder="Base del Cálculo para la cuota de la CSS" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">120- Cuota a Pagar de la CSS </label>
                                            <input type="text" className="form-control" placeholder="Cuota a Pagar de la CSS" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Liquidación final del impuesto</h6>
                                </div>
                                <div className="card-body row">


                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">121- Impuesto Jurado a Pagar </label>
                                            <input type="text" className="form-control" placeholder="Impuesto Jurado a Pagar" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">122- Impuestos Jurado a favor </label>
                                            <input type="text" className="form-control" placeholder="Impuestos Jurado a favor" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">123- Impuestos Jurado a favor </label>
                                            <input type="text" className="form-control" placeholder="Impuestos Jurado a favor" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 row">
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">124- Impuesto Estimado a Favor </label>
                                            <input type="text" className="form-control" placeholder="Impuesto Estimado a Favor" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label className="font-weight-bold">125- IImpuesto jurado a pagar cuota CSS </label>
                                            <input type="text" className="form-control" placeholder="Impuesto jurado a pagar cuota CSS" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Liquidación final del impuesto a pagar</h6>
                                </div>
                                <div className="card-body col-md-12 row">
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">Partidas Imp S/R</label>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">1ra Partida</label>
                                        <input type="text" className="form-control" placeholder="1ra Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">2da Partida</label>
                                        <input type="text" className="form-control" placeholder="2da Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">3ra Partida</label>
                                        <input type="text" className="form-control" placeholder="3ra Partida" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="font-weight-bold">Seguro Educativo</label>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">1ra Partida</label>
                                        <input type="text" className="form-control" placeholder="1ra Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">2da Partida</label>
                                        <input type="text" className="form-control" placeholder="2da Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">3ra Partida</label>
                                        <input type="text" className="form-control" placeholder="3ra Partida" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="font-weight-bold">3ra Partida</label>
                                        <input type="text" className="form-control" placeholder="3ra Partida" />
                                    </div>

                                    <div className="col-md-3">
                                        <label className="font-weight-bold">Cuotas del css</label>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">1ra Partida</label>
                                        <input type="text" className="form-control" placeholder="1ra Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">2da Partida</label>
                                        <input type="text" className="form-control" placeholder="2da Partida" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="font-weight-bold">3ra Partida</label>
                                        <input type="text" className="form-control" placeholder="3ra Partida" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <Footer />


            </div>
        </div>

    )
}

export default CreateNewRegister;