import { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setIsLoggedIn(false)
        navigate('/login')
    }
    return (
        <>
            <nav className='navbar container pt-3 pb-3 mt-1 align-items-start'>
                <Link className='navbar-brand text-light' to={'/'}>Stock Prediction Portal</Link>
                <div>
                    {isLoggedIn ? (
                        <button className='btn btn-danger' onClick={handleLogout} >Logout</button>
                    ) : (
                        <>
                            <Button text='Login' class="btn-outline-info" margin="me-2" url="/login" />
                            <Button text='Register' class="btn-info" url="/register" />
                        </>
                    )}

                </div>
            </nav>
        </>
    )
}

export default Header