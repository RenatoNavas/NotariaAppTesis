import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'> Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="name">Nombre </label>
                        <input type="text" placeholder='Ingrese Nombre' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lname">Apellido</label>
                        <input type="text" placeholder='Ingrese Apellido' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Ingrese Email' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" placeholder='Ingrese contraseña' className='form-control' />
                    </div>
                    <div className='d-grid mt-2'>
                        <button className='btn btn-primary'>Sign Up</button>

                    </div>
                    <p className='text-end mt-2'>
                        Already Registerd<Link to="/" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Signup