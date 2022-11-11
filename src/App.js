import React from 'react';
import './App.css';

function Empleado(props){
  return (
    <div className='Empleado' style={{
      backgroundColor:props.color
    }}>
      <h1>Nombre: {props.nombre}</h1>
      <h2>Cargo: {props.cargo}</h2>
    </div>
  );
}

function App(){
  return (
    <div className='App'>
      <h1 className='titulo'>Emleados registrados</h1>
      <Empleado nombre="Argenis Salazar" cargo="practicante" color="yellow"></Empleado>
      <Empleado nombre="Marcos Rivera" cargo="tecnico" color="orange"></Empleado>
      <Empleado nombre="Maria Rosas" cargo="administradora" ></Empleado>
    </div>
  );
}

export default App;

