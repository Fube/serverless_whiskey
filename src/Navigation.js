import React from "react";
import { Nav } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

function Navigation() {
    return (
        //className="flex nav"
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
