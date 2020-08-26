import React, { useContext, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { PresupuestoContext } from './PresupuestoContext';

export const ColocarPresupuesto = () => {

    const [{presupuestoInicial}, handleInputChange, reset] = useForm({presupuestoInicial:''});

   const {setPresupuesto} = useContext(PresupuestoContext);

   const [warning, setWarning] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        
        if (presupuestoInicial.length <= 1 || parseInt(presupuestoInicial) <= 0 ){
            setWarning(true);
        } else{
            setPresupuesto({presupuestoInicial: presupuestoInicial, presupuestoRestante : presupuestoInicial, inicio: false})
            
            reset()
        }

    }

    return (
        <div className= 'card'>
            <h2>Coloca tu presupuesto</h2>

            {warning && (<p className= "warning">el presupuesto es incorrecto</p>)}

            <form onSubmit={handleSubmit}>
                <input type='number' 
                        placeholder='Coloca tu Presupuesto'
                        name='presupuestoInicial'
                        value={presupuestoInicial}
                        onChange={handleInputChange} />

                <button type='submit'>definir presupuesto</button>
            </form>

        </div>
    )
}
