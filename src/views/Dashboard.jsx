import React, { useEffect, useState } from 'react';

import Contratos from '../components/Contratos';

const Dashboard = () => { 
  const [contratos, setContratos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/contratos");
        const contratosData = await response.json();
        console.log('Fetched data:', contratosData); 
        setContratos(contratosData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los contratos:', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section className='containerDashboard container-fluid '>
      {isLoading ? (
        <p>Cargando Archivos .....</p>
      ) : (
        <Contratos contratos={contratos} />
      )}
    </section>
  );
}
export default Dashboard;
