import React from 'react';

function Details({ detalleContrato, setDetalleContrato }) {
  return (
    <div className="detalle-contrato">
      <div className='d-flex justify-content-end me-3'>
      {/* <button className='btn btn-close-danger bg-danger text-white' onClick={() => setDetalleContrato(null)}>X</button> */}
      </div>
      {/* <h2 className='text-center'>Detalles del Contrato</h2> */}
      <div className='pt-3'>
      <p>Razón Social: {detalleContrato.empresa}</p>
      <p>Rut: {detalleContrato.rut}</p>
      <p>N° Licitación: {detalleContrato.licitacion}</p>
      <p>Monto: {detalleContrato.monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
      <p>Contacto: {detalleContrato.contacto}</p>
      <p>Telefono contacto: {detalleContrato.telefono}</p>
      <p>Correo: {detalleContrato.correo}</p>
      <p>Dirección: {detalleContrato.direccion}</p>
      <p>Tipo contrato: {detalleContrato.tipo}</p>
      <p>Estado contrato: {detalleContrato.estado}</p>
      <p>Inicio contrato: {detalleContrato.inicio}</p>
      <p>Fin de contrato: {detalleContrato.fin}</p>
      </div>
    </div>
  );
}

export default Details;
