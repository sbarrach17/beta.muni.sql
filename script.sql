-- Crear la base de datos
CREATE DATABASE proyecto;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(20) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (rut, nombre, contrasena) VALUES
('18977172-k', 'Andres Barra', '12'),
('11244678-2', 'Arturo Prat', '12'),
('12345678-9', 'Usuario Prueba', '123');


-- Crear la tabla de contratos
CREATE TABLE contratos (
    id SERIAL PRIMARY KEY,
    empresa VARCHAR(100) ,
    rut VARCHAR(30) ,
    licitacion VARCHAR(100) ,
    contacto VARCHAR(100) ,
    correo VARCHAR(100) ,
    telefono VARCHAR(20) ,
    direccion VARCHAR(255) ,
    tipo VARCHAR(50) ,
    estado VARCHAR(50) ,
    monto INT, 
    inicio DATE ,
    fin DATE ,
    notas TEXT );

INSERT INTO contratos (empresa, rut, licitacion, contacto, correo, telefono, direccion, tipo, estado, monto, inicio, fin, notas)
VALUES 
( 'Entel', '11223344-5', 'Licitacion 006', 'Ana Martinez', 'ana@example.com', '+56911223344', 'Calle de las Flores 789', 'Convenio Marco', 'Activo', 1500000, '2024-06-15', '2024-12-31', 'Contrato sujeto a revisión semestral.'),
( 'Microsoft', '22334455-6', 'Licitacion 007', 'Carlos López', 'carlos@example.com', '+56922334455', 'Avenida de los Robles 234', 'Licitacion Publica', 'Activo', 2900000, '2024-07-20', '2024-12-31', 'Contrato con cláusula de penalización por incumplimiento.'),
( 'Google', '33445566-7', 'Licitacion 008', 'Laura Fernández', 'laura@example.com', '+56933445566', 'Plaza Mayor 567', 'Convenio Marco', 'Activo', 7500000, '2024-08-10', '2024-12-31', 'Contrato de servicios con opción de renovación anual.'),
( 'Apple', '44556677-8', 'Licitacion 009', 'Diego Ramirez', 'diego@example.com', '+56944556677', 'Calle Principal 789', 'Licitacion Publica', 'Activo', 16200000, '2024-09-05', '2024-12-31', 'Contrato de suministro de hardware y software.'),
( 'Amazon', '55667788-9', 'Licitacion 010', 'Fernanda Gómez', 'fernanda@example.com', '+56955667788', 'Avenida Central 890', 'Convenio Marco', 'Activo', 680000, '2024-10-01', '2024-12-31', 'Contrato de almacenamiento en la nube con soporte técnico.'),
( 'Netflix', '66778899-0', 'Licitacion 011', 'Roberto Sanchez', 'roberto@example.com', '+56966778899', 'Calle del Cine 123', 'Licitacion Publica', 'Activo', 890000, '2024-11-01', '2024-12-31', 'Contrato de licenciamiento de contenidos.'),
( 'Sony', '77889900-1', 'Licitacion 012', 'Isabel Mendoza', 'isabel@example.com', '+56977889900', 'Avenida de los Juegos 456', 'Convenio Marco', 'Activo', 12230000, '2024-12-01', '2024-12-31', 'Contrato de mantenimiento de equipos de entretenimiento.'),
( 'Tesla', '88990011-2', 'Licitacion 013', 'Juan Soto', 'juan@example.com', '+56988990011', 'Calle de la Innovación 789', 'Licitacion Publica', 'Activo', 29000000, '2025-01-01', '2025-12-31', 'Contrato de suministro de vehículos eléctricos con opción de ampliación.'),
( 'HP', '99001122-3', 'Licitacion 014', 'Carolina Torres', 'carolina@example.com', '+56999001122', 'Avenida de la Tecnología 345', 'Convenio Marco', 'Activo', 7100.00, '2025-02-01', '2025-12-31', 'Contrato de suministro de hardware con garantía extendida.'),
( 'Dell', '00112233-4', 'Licitacion 015', 'Javier Medina', 'javier@example.com', '+56900112233', 'Plaza de la Informática 678', 'Licitacion Publica', 'Activo', 8780000, '2025-03-01', '2025-12-31', 'Contrato de suministro de equipos informáticos y servicios asociados.'),
( 'TecnoExpress', '11223344-5', 'Licitacion 021', 'Luis González', 'luis@example.com', '+56911223344', 'Calle de los Componentes 123', 'Compra Agil', 'Activo', 1200000, '2024-05-07', '2024-12-31', 'Adquisición de insumos informáticos para oficina.');


