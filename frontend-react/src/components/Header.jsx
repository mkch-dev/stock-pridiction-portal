import { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    return (
        <>
            <nav className='navbar container pt-3 pb-3 mt-1 align-items-start'>
                <Link className='navbar-brand text-light' to={'/'}>Stock Prediction Portal</Link>
                <div>
                    {isLoggedIn ? (
                        <button className='btn btn-danger'  >Logout</button>
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