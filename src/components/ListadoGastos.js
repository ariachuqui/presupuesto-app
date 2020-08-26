import React, { useContext } from "react";
import { PresupuestoContext } from "./PresupuestoContext";

export const ListadoGastos = () => {
    const { gastos, presupuesto } = useContext(PresupuestoContext);
    const { presupuestoRestante, presupuestoInicial } = presupuesto;

    const color = () => {
        if (presupuestoRestante > ( presupuestoInicial * 0.4 ) ){
            return 'contador green'
        } 
        else if (presupuestoRestante <= ( presupuestoInicial * 0.2 )) {
            return 'contador red'
        }else{
            return 'contador yellow'
        }
        
    }

    return (
        <div>
            <h2>Listado</h2>

            {gastos.map(({ nombre, cantidad, key }) => (
                <div className="gastos" key={key}>
                    <div className="gasto">
                        <p className="gasto-nombre">{nombre}</p>
                        <p className="gasto-cantidad">${cantidad}</p>
                    </div>
                </div>
            ))}

            <div className="contador presupuesto">
                <p>Presupuesto: ${presupuestoInicial}</p>
            </div>

            <div className={`${color()}`}>
                <p>Restante: ${presupuestoRestante}</p>
            </div>
        </div>
    );
};
