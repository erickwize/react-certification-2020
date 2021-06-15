import React from "react";
import {Navbar,Button,Form,FormControl} from "react-bootstrap";

function Header(props){
    return(
            <Navbar bg="primary" variant ="dark">
                <Navbar.Brand href="#" >
                <Form inline>
                    <FormControl type="text" placeholder="Wizeline" className=" mr-sm-2" />
                </Form>
                </Navbar.Brand>
                
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text id="darmode">
                            Darkmode  
                    </Navbar.Text>
                   <from inline>
                        <Button id="Login">
                            Login
                        </Button>
                    </from>
                    
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header