import React, { useState, useEffect } from "react";
import { Modal} from "react-bootstrap";
import { errorToast, successToast } from "../utils/toast.js";
import Details from "./Details";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contratos = ({ contratos }) => {
    const [detalleContrato, setDetalleContrato] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [contractsPerPage] = useState(7);
    const [contratosActualizados, setContratosActualizados] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setContratosActualizados(contratos);
    }, [contratos]);

    const totalPages = Math.ceil(
        contratosActualizados.length / contractsPerPage
    );

    const mostrarDetalles = (contrato) => {
        setDetalleContrato(contrato);
        setShowModal(true);
    };

    const eliminarContrato = async (id) => {
        try {
            await fetch(`http://localhost:3000/contratos/${id}`, {
                method: "DELETE",
            });
            successToast("✅ Contrato Eliminado");
            actualizarContratos();
        } catch (error) {
            errorToast("❌ No se pudo eliminar contrato");
            console.error("Error al eliminar contrato:", error);
        }
    };

    const actualizarContratos = async () => {
        try {
            const response = await fetch("http://localhost:3000/contratos");
            const data = await response.json();
            setContratosActualizados(data);
        } catch (error) {
            errorToast("No se pudieron cargar contratos");
            console.error("Error al actualizar contratos:", error);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setBusqueda(event.target.value);
        setCurrentPage(1);
    };

    const filteredContracts = contratosActualizados.filter((contrato) =>
        Object.values(contrato).some((value) =>
            value.toString().toLowerCase().includes(busqueda.toLowerCase())
        )
    );

    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    const currentContracts = filteredContracts.slice(
        indexOfFirstContract,
        indexOfLastContract
    );

    return (
        <section className="todo">
            <div className="contrato-list  ">
                <input
                    type="text"
                    placeholder="Buscar"
                    value={busqueda}
                    onChange={handleSearch}
                    className=""
                />
                <Link to="/form" className="btn btn-success ms-3">
                    AGREGAR
                </Link>
                <table className="  mt-3 table table-hover table-bordered  table-striped text-center">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>RAZÓN SOCIAL</th>
                            <th>RUT</th>
                            <th>LICITACIÓN</th>
                            <th>TIPO CONTRATO</th>
                            <th>ESTADO</th>
                            <th>DETALLES</th>
                            <th>OBSERVACIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentContracts.map((contrato) => (
                            <tr key={contrato.id}>
                                <td>
                                    <button
                                        className=" btn badge rounded-pill text-bg-danger"
                                        onClick={() =>
                                            eliminarContrato(contrato.id)
                                        }
                                    >
                                        Eliminar
                                    </button>
                                </td>
                                <td>{contrato.empresa}</td>
                                <td>{contrato.rut}</td>
                                <td>{contrato.licitacion}</td>
                                <td>{contrato.tipo}</td>
                                <td>{contrato.estado}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => {
                                            mostrarDetalles(contrato);
                                            setShowModal(true);
                                        }}
                                    >
                                        <GiMagnifyingGlass className="icon" />
                                    </button>
                                </td>
                                <td>
                                    <Link to="/notes">
                                    <button className="btn btn-outline-success">
                                        <BsPencilSquare className="icon" />
                                    </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div
                    className="btn-toolbar mb-3 d-flex justify-content-center"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                >
                    <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="First group"
                    >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Anterior
                        </button>
                        {[...Array(totalPages).keys()].map((pageNumber) => (
                            <button
                                key={pageNumber}
                                type="button"
                                className={`btn btn-outline-primary ${
                                    currentPage === pageNumber + 1
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => paginate(pageNumber + 1)}
                            >
                                {pageNumber + 1}
                            </button>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                className="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Contrato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {detalleContrato && (
                        <Details
                            detalleContrato={detalleContrato}
                            setDetalleContrato={setDetalleContrato}
                        />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Contratos;



// import React, { useState, useEffect } from "react";
// import { Modal} from "react-bootstrap";
// import { errorToast, successToast } from "../utils/toast.js";
// import Details from "./Details";
// import { GiMagnifyingGlass } from "react-icons/gi";
// import { BsPencilSquare } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { obtenerContratos, eliminarContrato } from "../services/sql.js";

// const Contratos = () => {
//     const [detalleContrato, setDetalleContrato] = useState(null);
//     const [busqueda, setBusqueda] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [contractsPerPage] = useState(7);
//     const [contratosActualizados, setContratosActualizados] = useState([]);
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         obtenerContratos()
//             .then(data => {
//                 setContratosActualizados(data);
//             })
//             .catch(error => {
//                 errorToast("No se pudieron cargar contratos");
//                 console.error("Error al actualizar contratos:", error);
//             });
//     }, []);

//     const totalPages = Math.ceil(contratosActualizados.length / contractsPerPage);

//     const mostrarDetalles = (contrato) => {
//         setDetalleContrato(contrato);
//         setShowModal(true);
//     };

//     const handleDeleteContrato = async (id) => {
//         try {
//             await eliminarContrato(id);
//             successToast("✅ Contrato Eliminado");
//             actualizarContratos();
//         } catch (error) {
//             errorToast("❌ No se pudo eliminar contrato");
//             console.error("Error al eliminar contrato:", error);
//         }
//     };

//     const actualizarContratos = async () => {
//         try {
//             const data = await obtenerContratos();
//             setContratosActualizados(data);
//         } catch (error) {
//             errorToast("No se pudieron cargar contratos");
//             console.error("Error al actualizar contratos:", error);
//         }
//     };

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleSearch = (event) => {
//         setBusqueda(event.target.value);
//         setCurrentPage(1);
//     };

//     const filteredContracts = contratosActualizados.filter((contrato) =>
//         Object.values(contrato).some((value) =>
//             value.toString().toLowerCase().includes(busqueda.toLowerCase())
//         )
//     );

//     const indexOfLastContract = currentPage * contractsPerPage;
//     const indexOfFirstContract = indexOfLastContract - contractsPerPage;
//     const currentContracts = filteredContracts.slice(
//         indexOfFirstContract,
//         indexOfLastContract
//     );

//     return (
//         <section className="todo">
//             <div className="contrato-list  ">
//                 <input
//                     type="text"
//                     placeholder="Buscar"
//                     value={busqueda}
//                     onChange={handleSearch}
//                     className=""
//                 />
//                 <Link to="/form" className="btn btn-success ms-3">
//                     AGREGAR
//                 </Link>
//                 <table className="  mt-3 table table-hover table-bordered  table-striped text-center">
//                     <thead>
//                         <tr>
//                             <th>Acción</th>
//                             <th>RAZÓN SOCIAL</th>
//                             <th>RUT</th>
//                             <th>LICITACIÓN</th>
//                             <th>TIPO CONTRATO</th>
//                             <th>ESTADO</th>
//                             <th>DETALLES</th>
//                             <th>OBSERVACIONES</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {currentContracts.map((contrato) => (
//                             <tr key={contrato.id}>
//                                 <td>
//                                     <button
//                                         className=" btn badge rounded-pill text-bg-danger"
//                                         onClick={() =>
//                                             handleDeleteContrato(contrato.id)
//                                         }
//                                     >
//                                         Eliminar
//                                     </button>
//                                 </td>
//                                 <td>{contrato.empresa}</td>
//                                 <td>{contrato.rut}</td>
//                                 <td>{contrato.licitacion}</td>
//                                 <td>{contrato.tipo}</td>
//                                 <td>{contrato.estado}</td>
//                                 <td>
//                                     <button
//                                         className="btn btn-outline-primary"
//                                         onClick={() => mostrarDetalles(contrato)}
//                                     >
//                                         <GiMagnifyingGlass className="icon" />
//                                     </button>
//                                 </td>
//                                 <td>
//                                     <Link to="/notes">
//                                         <button className="btn btn-outline-success">
//                                             <BsPencilSquare className="icon" />
//                                         </button>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div
//                     className="btn-toolbar mb-3 d-flex justify-content-center"
//                     role="toolbar"
//                     aria-label="Toolbar with button groups"
//                 >
//                     <div
//                         className="btn-group me-2"
//                         role="group"
//                         aria-label="First group"
//                     >
//                         <button
//                             type="button"
//                             className="btn btn-outline-primary"
//                             onClick={() => paginate(currentPage - 1)}
//                             disabled={currentPage === 1}
//                         >
//                             Anterior
//                         </button>
//                         {[...Array(totalPages).keys()].map((pageNumber) => (
//                             <button
//                                 key={pageNumber}
//                                 type="button"
//                                 className={`btn btn-outline-primary ${
//                                     currentPage === pageNumber + 1 ? "active" : ""
//                                 }`}
//                                 onClick={() => paginate(pageNumber + 1)}
//                             >
//                                 {pageNumber + 1}
//                             </button>
//                         ))}
//                         <button
//                             type="button"
//                             className="btn btn-outline-primary"
//                             onClick={() => paginate(currentPage + 1)}
//                             disabled={currentPage === totalPages}
//                         >
//                             Siguiente
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <Modal
//                 show={showModal}
//                 onHide={() => setShowModal(false)}
//                 dialogClassName="modal-90w"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 className="custom-modal"
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Detalles del Contrato</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {detalleContrato && (
//                         <Details
//                             detalleContrato={detalleContrato}
//                             setDetalleContrato={setDetalleContrato}
//                         />
//                     )}
//                 </Modal.Body>
//             </Modal>
//         </section>
//     );
// };

// export default Contratos;
