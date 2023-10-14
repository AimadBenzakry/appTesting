import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'; // import useLocation hook

export const Header = () => {
  const location = useLocation(); 
  const [path, setPath] = React.useState(location.pathname); 
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid style={{"marginLeft":"1.5rem"}}>
            <Navbar.Brand href='/' style={{"color":"gold", "display":"flex","justifyContent":"space-between"}}>
              <FontAwesomeIcon icon={faBook} style={{"fontSize":"2rem"}}/>
              &nbsp;
              <h2 style={{"fontSize":"1.5rem" }}>Ma Bibliothèque</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="/" style={{color: path == '/' && 'gold'}}>Accueil</Nav.Link>
                <Nav.Link href="/ajout" style={{color: path == '/ajout' && 'gold'}}>Ajouter un livre</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}
