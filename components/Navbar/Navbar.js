import React from "react"
import {FormControl, Nav, Form, Navbar, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Navigation = () => {
    return(
  <>
  <Navbar bg="dark" variant="dark">
      <Link to ="/">
      <Navbar>Navbar</Navbar>
      </Link>
      <Nav className="mr-auto">
      <Nav.Link href="#home">Homes Pages</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
       <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>  
</>
)
}

export default Navigation