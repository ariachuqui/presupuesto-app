import React, { useContext, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { PresupuestoContext } from './PresupuestoContext'

export const AgregarGastos = () => { 

    const {presupuesto, setPresupuesto, setGastos} = useContext(PresupuestoContext)

    const [ values, handleInputChange, reset ] = useForm({nombre:'', cantidad:''})
    const {nombre, cantidad} = values;

    const [warning, setWarning] = useState(false)

    
    const handleSubmit = e => {
        e.preventDefault();
        
        if (nombre <= 1 || cantidad <= 1){
            setWarning(true)
        }else{
            setGastos(g => [...g, {...values, key: new Date().getTime() }])
            const newPresupuesto = parseInt(presupuesto.presupuestoRestante) - parseInt(cantidad);
    
            setPresupuesto ({...presupuesto, presupuestoRestante : newPresupuesto});
    
    
            reset()
        }

    }

    return (
        <div>
            <h2>Agrega tus gastos aquí</h2>

            {warning && (<p className='warning' >todos los campos son obligatorios</p>)}

            <form onSubmit={ handleSubmit }>
                <p>Nombre Gasto</p>
                <input type='text'
                        placeholder='Ej. Ir a comer'
                        name='nombre'
                        value={nombre}
                        onChange={ handleInputChange } />
    
                <p>Cantidad Gasto</p>
                <input type='number'
                        placeholder='0'
                        name='cantidad'
                        value={cantidad}
                        onChange={ handleInputChange } />
    
                <button type='submit'>agregar gasto</button>
            </form>
        </div>
    )
}
