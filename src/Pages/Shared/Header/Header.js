import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaMoon, FaSun } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import './Header.css';
import logo from '../../../assets/logo.jpg';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><NavLink to='/' className='text-deco fs-1'> <Image
                    style={{ height: '1.5em' }}
                    roundedCircle
                    src={logo}>
                </Image> Quick Learn</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/courses' className='text-deco'>All Courses</NavLink>
                        <NavLink to='/faq' className='text-deco'>FAQ</NavLink>
                        <NavLink to='/blog' className='text-deco'>BLOG</NavLink>
                    </Nav>
                    <div className='d-flex'>
                        <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault"><FaSun></FaSun></label>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>

                        <label className="form-check-label me-2"  htmlFor="flexSwitchCheckDefault"><FaMoon></FaMoon></label>
                    </div>
                    <div>
                        <Nav className='d-flex'>
                            <div>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='m-2'>{user?.displayName}</span>
                                            <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                        :
                                        <>
                                            <NavLink to='/login' className='text-deco'>Login</NavLink>
                                            <NavLink to='/register' className='text-deco ' style={{ marginRight: '0.8em', marginLeft: '0.8em', }}>Register</NavLink>
                                        </>
                                }
                            </div>
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>
                    </div>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;