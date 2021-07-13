import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/day">Today</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/task">Task</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;
