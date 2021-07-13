//Dropdown.js
import React, { useRef, useState } from "react";
import './dropdown.scss';

// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import { useDetectOutsideClick } from "./useDetectOutsideClick";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {

  // Hook for dropdown menu
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} className="navbar navbar-custom" variant="dark" expand="lg" fixed="top">
    <div className="topnav align-items-center">
      <LinkContainer to="/">
        <Navbar.Brand onClick={() => setExpanded(false)} className="title align-self-center">Parker Graham</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className="float-right align-self-middle align-content-center" aria-controls="basic-navbar-nav"/>
    </div>
      <Navbar.Collapse className="text-right justify-content-end mw-50">

        <Nav className="float-right">

          <LinkContainer className="mx-1" to="/about">
            <Nav.Link onClick={() => setExpanded(false)}>about me</Nav.Link>
          </LinkContainer>
          
          <a className="" id="sep"> / </a>
          
          <LinkContainer className="mx-1" to="/resume">
            <Nav.Link onClick={() => setExpanded(false)} className="nav-link">résumé</Nav.Link>
          </LinkContainer>

          <a className="" id="sep"> / </a>
          
          <NavDropdown  className="mx-1" title="projects" id="nav-dropdown">

            
              <LinkContainer to="/project1">
                <NavDropdown.Item onClick={() => setExpanded(false)} >portfolio website</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Divider />

              <LinkContainer to="/project2">
              <NavDropdown.Item onClick={() => setExpanded(false)}>project 2</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to="/project3">
              <NavDropdown.Item onClick={() => setExpanded(false)}>project 3</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to="/project4">
              <NavDropdown.Item onClick={() => setExpanded(false)}>project 4</NavDropdown.Item>
              </LinkContainer>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DropdownMenu;
