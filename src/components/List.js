import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "../api/axios";
import {useNavigate} from "react-router-dom";

const GET_RENTA_LIST = "/api/home/list";

const formatDate = () => {
    var today = new Date();

    var day = today.getDate();
    var month = (today.getMonth() + 1)
    var day_two = "01";
    if (today.getDate() <= 9) {
        day = "0" + today.getDate()
    }
    if ((today.getMonth() + 1) <= 9) {
        month = "0" + (today.getMonth() + 1)
    }
    var to = today.getFullYear() + '-' + month + '-' + day


    var from = today.getFullYear() + '-' + month + '-' + day_two


    return {from: from, to: to}
}


const List = () => {


    var dates = formatDate();

    const [coockie, setCoockie] = useState("");
    const navigate = useNavigate()
    const [startdate, setStartdate] = useState(String(dates.from));
    const [enddate, setEnddate] = useState(String(dates.to));
    const [data, setData] = useState([]);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [nextCoockie, setNextCoockie] = useState('')
    const [isLastPage, setIsLastPage] = useState(false)



    useEffect(() => {
        (async () => {
            const response = await axios.get(GET_RENTA_LIST, {
                    mode: 'no-cors',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
                    }
                }
            ).catch((error) => {
                if (error.response?.status === 401) {
                    navigate("/", {replace: true});
                }

            })
            console.log(response)

        

        })()
    }, [setCoockie, startdate, enddate, navigate, setEnddate, setStartdate, coockie,nextCoockie])


    var mostrarRentas = data.map((datos, i) => {


       
        return (
            <tr key={datos["@GUID"]}>
                <td><p className="small">{datos['@GUID']}</p></td>
                <td><p className="small">{datos['Number']}</p></td>
                <td><p className="small">{datos['ContactName']}</p></td>
                <td><p className="small">{datos['SalespersonName']}</p></td>
                <td><p className="small">{datos['ConsigneeName']}</p></td>
                <td><p className="small">{datos['HasAttachments']}</p></td>
                <td><p className="small">{datos['Status']}</p></td>
                <td><p className="small">{(datos['Incoterm'] !== undefined) ? (datos['Incoterm']["Code"]) : ""}</p></td>|

                <td>

                    <button className="btn btn-outline-secondary" onClick={() => {navigate('/quotes-details/'+datos['@GUID'], { replace: true });}}>
                        <i
                            className="fas fa-arrow-right  text-gray-400"></i></button>

                </td>
            </tr>
        );

    });

    const handleRangeDate = (e) => {
        e.preventDefault()

        setNextCoockie("")
        setStartdate(((from !== "") ? from : startdate))
        setEnddate(((to !== "") ? to : enddate))

    }

    const hadleNextPage = (e) => {
        e.preventDefault()
        setCoockie("")
        if (nextCoockie !== "") {
            window.scrollTo(0, 0)
            setCoockie(nextCoockie)
        }

    }

    const handleNewRegister=(e)=>{
        navigate("/create-new", { replace: true });

    }

    return (

        <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <Nav/>
                    <div className="container-fluid">

                        <h1 className="h3 mb-2 text-gray-800">Listado de Rentas Natural</h1>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Rentas</h6>
                            </div>
                            <div className="card-body">

                                <form className="user" onSubmit={handleRangeDate}>
                                    <div className="row p-3">
                                        <div className="col-md-7 row">
                                            <div className="col-md-4">
                                                <label htmlFor="from">Desde</label>
                                                <input name="from" type="date" id="from" className="form-control"
                                                       value={(from === "") ? startdate : from}
                                                       onChange={(e) => setFrom(e.target.value)}/>

                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="to">Hasta</label>
                                                <input name="to" type="date" id="to" className="form-control"
                                                       value={(to === "") ? enddate : to}

                                                       onChange={(e) => setTo(e.target.value)}/>

                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="">&nbsp;&nbsp;</label>
                                                <button className="btn btn-primary btn-user btn-block">Consultar
                                                </button>

                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="">&nbsp;&nbsp;</label>
                                                <button className="btn btn-success btn-user btn-block" onClick={handleNewRegister}>Agregar Nuevo
                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                </form>


                                <div className="table-responsive hover">

                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                        <tr>

                                            <th className="small"><strong>Cedula</strong></th>
                                            <th className="small"><strong>Ruc</strong></th>
                                            <th className="small"><strong>Contribuyente</strong></th>
                                            <th className="small"><strong>Periodo</strong></th>
                                            <th className="small"><strong>Creado</strong></th>
                                            <th></th>
                                        </tr>
                                        </thead>

                                        <tbody>

                                        {/*mostrarRentas*/}

                                        </tbody>

                                    </table>


                                </div>
                               

                            </div>
                        </div>

                    </div>

                </div>

                <Footer/>


            </div>
        </div>

    )


}



export default List;
