import React, { useState } from "react";
import { successToast, errorToast } from "../utils/toast";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; 
import "../css/Login.css";

const Login = () => {
    const [rut, setRut] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate(); // Obtiene la función navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!rut || !contrasena) {
                errorToast("Por favor, complete todos los campos.");
                return;
            }
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rut, contrasena }),
            });
            const data = await response.json();
            if (response.ok) {
                successToast(data.message);
                redirectToDashboard();
            } else {
                errorToast(data.message || "Error al iniciar sesión.");
            }
        } catch (error) {
            console.error("Error de red al iniciar sesión:", error);
            errorToast("Error de red al iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    const redirectToDashboard = () => {
        navigate("/dashboard"); 
    };

    return (
        <section className="containerForm container-fluid">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mt-5">
                    PROYECTO
                    <br />
                    MUNICIPALIDAD
                </h2>
                <div className="box">
                    <div className="d-flex flex-column">
                        <label htmlFor="rut">
                            <FaCircleUser /> Ingresa tu Rut
                        </label>
                        <input
                            placeholder="xxxxxxxx-x"
                            className="mt-2"
                            type="text"
                            name="rut"
                            id="rut"
                            value={rut}
                            onChange={(e) => setRut(e.target.value)}
                        />
                    </div>

                    <div className="d-flex flex-column mt-3">
                        <label htmlFor="password">
                            <RiLockPasswordFill /> Ingresa tu contraseña
                        </label>
                        <input
                            className="mt-2"
                            placeholder="********"
                            type="password"
                            name="password"
                            id="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark mt-5">
                        {" "}
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
