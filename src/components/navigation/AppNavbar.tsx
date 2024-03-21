import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react'
import AppLogo from '../../assets/images/logomarca-pecunia.png'
import { useAuth } from '../../hooks/useAuth'

const AppNavbar: React.FC = () => {
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth()

    const logUserOut = () => {
        logout()
        navigate('/login')
    }
    return (
        <>
            <Navbar fluid rounded border>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={AppLogo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Pecunia Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-emerald-500 dark:text-white">
                        Pecunia Pay
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {isAuthenticated ? (
                        <Button color="failure" onClick={logUserOut}>
                            Sair
                        </Button>
                    ) : (
                        <Button
                            color="primary"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </Button>
                    )}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/" active>
                        Home
                    </Navbar.Link>
                    {/* <Navbar.Link href="#">Sobre nós</Navbar.Link>
                    <Navbar.Link href="#">Contato</Navbar.Link> */}
                    {isAuthenticated ? (
                        <Navbar.Link as={Link} to="/transactions">
                            Minhas Transações
                        </Navbar.Link>
                    ) : (
                        <></>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default AppNavbar
