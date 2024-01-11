import NavBar from 'react-bootstrap/Navbar';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                    <Nav.Link> MỚI </Nav.Link>
                    <Nav.Link> TIÊU ĐIỂM </Nav.Link>
                    <Nav.Link> XU HƯỚNG </Nav.Link>                    
                </Nav>
            </Container>
        </NavBar>
    )
}