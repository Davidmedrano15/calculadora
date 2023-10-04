import "./App.css";
import calculogo from "./images/262816.png";
import Boton from "./componente/Boton";
import Pantalla from "./componente/pantalla";
import BotonClear from "./componente/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("porfavor ingrese valores para realizar los calculos");
    }
  };

  return (
    <div className="app">
      <div className="calcu__logo--contenedor">
        <p className="calcu__logo--text">calculadora</p>
        <img src={calculogo} className="calcu__logo" alt="Logo De Caluladora" />
      </div>
      <div className="contenedor">
        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
            <div className="porcentaje">
              <Boton manejarClic={agregarInput}>%</Boton>
            </div>
          </div>
          <div className="contenedor-c">
            <div className="fila">
              <Boton manejarClic={agregarInput}>1</Boton>
              <Boton manejarClic={agregarInput}>2</Boton>
              <Boton manejarClic={agregarInput}>3</Boton>
              <Boton manejarClic={agregarInput}>+</Boton>
            </div>
            <div className="fila">
              <Boton manejarClic={agregarInput}>4</Boton>
              <Boton manejarClic={agregarInput}>5</Boton>
              <Boton manejarClic={agregarInput}>6</Boton>
              <Boton manejarClic={agregarInput}>-</Boton>
            </div>
            <div className="fila">
              <Boton manejarClic={agregarInput}>7</Boton>
              <Boton manejarClic={agregarInput}>8</Boton>
              <Boton manejarClic={agregarInput}>9</Boton>
              <Boton manejarClic={agregarInput}>*</Boton>
            </div>
            <div className="fila">
              <Boton manejarClic={calcularResultado}>=</Boton>
              <Boton manejarClic={agregarInput}>0</Boton>
              <Boton manejarClic={agregarInput}>.</Boton>
              <Boton manejarClic={agregarInput}>/</Boton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
