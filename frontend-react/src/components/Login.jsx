import axios from 'axios'
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    async function handleLogin(e) {
        e.preventDefault()
        setLoading(true)
        const userData = {
            username,
            password,
        }
        try {
            const response = await axios.post('http://localhost:8000/api/v1/token/', userData)
            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('User logged in successfully')
            setIsLoggedIn(true)
            navigate('/')
        } catch (error) {
            console.error('Invalid credentials. Please try again.')
            setError('Invalid credentials')
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Login to our portal</h3>
                        <form onSubmit={handleLogin}>
                            <div className='mb-3'>
                                <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='mb-4'>
                                <input type="password" placeholder="Set password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            {error && <div className='text-danger'>{error}</div>}
                            {loading ? (
                                <button type='submit' className='btn btn-info d-block mx-auto' disabled>Please wait...</button>
                            ) : (
                                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login