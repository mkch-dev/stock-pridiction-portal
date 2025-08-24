import React from 'react'

const Register = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Create an account</h3>
                        <form action="">
                            <input type="text" placeholder="Username" className="form-control mb-3" />
                            <input type="email" placeholder="Email address" className="form-control mb-3" />
                            <input type="password" placeholder="Set password" className="form-control mb-5" />
                            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register