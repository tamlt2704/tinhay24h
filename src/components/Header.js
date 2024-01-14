import NavBar from 'react-bootstrap/Navbar';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function Header() {
    let expand = false;
    return (
        <NavBar bg='light' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand> 
                    <img 
                    src={process.env.PUBLIC_URL + '/tinhay24hlogo.JPG'}
                    width={150}
                    height={150}
                    />
                </Navbar.Brand>
                <Nav> 
                    <Nav.Link as={NavLink} to="/news"> MỚI </Nav.Link>
                    <Nav.Link as={NavLink} to='/events'> TIÊU ĐIỂM </Nav.Link>
                    <Nav.Link as={NavLink} to='/trend'> XU HƯỚNG </Nav.Link>
                </Nav>
            </Container>
        </NavBar>
    )
}