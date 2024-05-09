     <p>Nombre de Empresa: {contrato.empresa}</p>
              <p>N° Licitación: {contrato.licitacion}</p>
              <p>Monto: {contrato.monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
              <p>Inicio de Contrato: {contrato.inicio_contrato}</p>
              <p>Fin de Contrato: {contrato.fin_contrato}</p>
              <p>Observación: {contrato.comentario}</p>

              import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
const [formData, setFormData] = useState({
razonSocial: '',
rut: '',
licitacion: '',
contacto: '',
correoContacto: '',
telefonoContacto: '+569',
direccion: '',
tipoContrato: '',
estadoContrato: '',
monto: '',
inicioContrato: '',
finContrato: '',
observacion: ''
});

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await fetch('http://localhost:3000/contratos', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
});
if (response.ok) {
// Reiniciar el formulario si el contrato se agregó exitosamente
setFormData({
razonSocial: '',
rut: '',
licitacion: '',
contacto: '',
correoContacto: '',
telefonoContacto: '+569',
direccion: '',
tipoContrato: '',
estadoContrato: '',
monto: '',
inicioContrato: '',
finContrato: '',
observacion: ''
});
alert('Contrato agregado exitosamente');
} else {
throw new Error('Error al agregar contrato');
}
} catch (error) {
console.error('Error:', error);
alert('Error al agregar contrato');
}
};

return (
<section className='containerForm'>
<div className='divForm'>
<div className='formulario container-fluid '>
<form className="row g-3" onSubmit={handleSubmit}>
<h2 className='text-center'> Nuevo Contrato</h2>
<div className="col-md-4">
<label htmlFor="">Razón Social</label>
<input placeholder='Nombre empresa' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Rut</label>
<input placeholder='xxxxxxxx-x' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Licitación</label>
<input placeholder='N° licitación' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Contacto</label>
<input placeholder='Nombre y Apellido' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Correo Contacto</label>
<input placeholder='xxxx@xx.com' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Telefono Contacto</label>
<input type="text" className="form-control" name="" id="" defaultValue="+569"/>
</div>
<div className="col-md-4">
<label htmlFor="">Dirección</label>
<input placeholder='Ubicación de la empresa' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Tipo Contrato</label>
<select className="form-select" name="" id="">
<option value="">Seleccionar</option>
<option value="tipo1">Compra</option>
<option value="tipo2">Arriendo</option>
<option value="tipo3">Venta</option>
</select>
</div>
<div className="col-md-4">
<label htmlFor="">Estado Contrato</label>
<select className="form-select" name="" id="">
<option value="">Seleccionar</option>
<option value="tipo1">Activo</option>
<option value="tipo2">En Revisión</option>
<option value="tipo3">Venta</option>
</select>
</div>
<div className="col-md-4">
<label htmlFor="">Monto</label>
<input placeholder='$' type="text" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Inicio Contrato</label>
<input placeholder='Año-Mes-Día' type="date" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Fin Contrato</label>
<input placeholder='Año-Mes-Día' type="date" className="form-control" name="" id="" />
</div>
<div className="col-md-4">
<label htmlFor="">Observación</label>
<textarea placeholder='Ingresar notas referente al contrato'  className="form-control" name="" id="" rows="3" maxLength="500"/>
<small className="text-muted">Máximo 100 caracteres</small>
</div>
<div className='col-md-4 align-content-center ms-2'>
<button className='btn btn-primary'>Guardar</button>
<Link to="/">
<button className='btn btn-danger ms-2'> Volver</button></Link>
</div>
</form>
</div>
</div>
</section>
);
};

export default Form;
