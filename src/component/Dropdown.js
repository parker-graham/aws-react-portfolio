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

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('main');
  return (
    <Navbar className="navbar navbar-custom" variant="dark" expand="lg" fixed="top">
    <div className="topnav align-items-center">
      <LinkContainer to="/">
        <Navbar.Brand className="title align-self-center">PG's Homepage</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle className="float-right align-self-middle align-content-center" aria-controls="basic-navbar-nav"/>
    </div>
      <Navbar.Collapse className="text-right justify-content-end mw-50">

        <Nav className="float-right">

          <LinkContainer className="mx-1" to="/about">
            <Nav.Link>about me</Nav.Link>
          </LinkContainer>
          
          <a className="" id="sep"> / </a>
          
          <LinkContainer className="mx-1" to="/resume">
            <Nav.Link className="nav-link">résumé</Nav.Link>
          </LinkContainer>

          <a className="" id="sep"> / </a>
          
          <NavDropdown className="mx-1" title="projects" id="nav-dropdown">

            
              <LinkContainer to="/project1">
                <NavDropdown.Item>portfolio website</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Divider />

              <LinkContainer to="/project2">
              <NavDropdown.Item href="/project2">senior design - aws iot</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to="/project3">
              <NavDropdown.Item>eating the quadrapatty</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to="/project4">
              <NavDropdown.Item>ooo way ouu</NavDropdown.Item>
              </LinkContainer>

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DropdownMenu;
