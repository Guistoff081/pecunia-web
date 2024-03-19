import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react'
import AppLogo from '../../assets/images/logomarca-pecunia.png'

const AppNavbar: React.FC = () => {
    return (
        <>
            <Navbar fluid rounded border>
                <Navbar.Brand href="#">
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
                    <Button className="border-emerald-600 bg-emerald-500 hover:border-emerald-500 hover:bg-emerald-600 focus:border-emerald-600 focus:ring-emerald-300 enabled:bg-emerald-500 enabled:hover:bg-emerald-600 enabled:focus:border-emerald-600 dark:bg-emerald-600 dark:focus:ring-emerald-800 dark:enabled:hover:bg-emerald-700">
                        Registre-se
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Sobre nós</Navbar.Link>
                    <Navbar.Link href="#">Contato</Navbar.Link>
                    <Navbar.Link as={Link} to="/transactions">
                        Minhas Transações
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default AppNavbar
