import React, { useState, useEffect } from "react";
import { ColocarPresupuesto } from "./components/ColocarPresupuesto";
import { ListadoGastos } from "./components/ListadoGastos";
import { AgregarGastos } from "./components/AgregarGastos";
import { PresupuestoContext } from "./components/PresupuestoContext";

function App() {
    const inicialGastos = JSON.parse(localStorage.getItem("gastos")) || [];

    const inicialPresupuesto = JSON.parse(
        localStorage.getItem("presupuesto")
    ) || { inicio: true };

    const [gastos, setGastos] = useState(inicialGastos);

    const [presupuesto, setPresupuesto] = useState(inicialPresupuesto);
    const { inicio } = presupuesto;

    useEffect(() => {
        localStorage.setItem("gastos", JSON.stringify(gastos));
        localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
    }, [gastos, presupuesto]);

    const cleanStorage = () => {
        localStorage.clear();
        window.location.href = window.location.href
    };

    return (
        <>
            <h1>Gasto Semanas</h1>
            <PresupuestoContext.Provider
                value={{ presupuesto, setPresupuesto, gastos, setGastos }}
            >
                {inicio ? (
                    <ColocarPresupuesto />
                ) : (
                    <>
                        <div className="card presupuesto">
                            <AgregarGastos />
                            <ListadoGastos />
                        </div>
                        <button className="btn" onClick={cleanStorage}>
                            Nuevo Presupuesto
                        </button>
                    </>
                )}
            </PresupuestoContext.Provider>
        </>
    );
}

export default App;
