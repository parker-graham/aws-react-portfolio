import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import './home.scss';

const homepage = () => {
    return (
        <div className="body home">
            <div className="blurb inner-border" style={{ textAlign: "center", color: "#E5E5E5"}}>
                <h1 
                    style={{textAlign: "center", margin: "2%"}}>
                    Hi! I'm Parker Graham
                </h1>
                <h2
                    style={{textAlign: "center", fontFamily: "oxygenlight", margin: "2%"}}>
                    I like to do stuff, and occasionally things.
                </h2>
            </div>
            <hr className='homebr'></hr>
            <div className="blurb inner-border" style={{ textAlign: "center", color: "#E5E5E5"}}>
                <h1
                    style={{textAlign: "center", margin: "2%", color: "#E5E5E5"}}>
                    Learn. Dream. Create.
                </h1>
            </div>
            <div className="row" style={{justifyContent:"space-between", margin: "5% 20%"}}>
                <div className="card w-33 rounded-0">
                    <div className="card-body d-none d-lg-flex" id="homeCard">
                        <h5 className="card-title"></h5>
                        <LinkContainer to="/about">
                            <Nav.Link className="btn-btn-primary">about me</Nav.Link>
                        </LinkContainer>
                    </div>
                </div>
                <div className="card w-33 rounded-0">
                    <div className="card-body d-none d-lg-flex" id="homeCard">
                        <h5 className="card-title"></h5>
                        <LinkContainer to="/resume">
                            <Nav.Link className="btn-btn-primary">résumé</Nav.Link>
                        </LinkContainer>
                    </div>
                </div>
                <div className="card w-33 rounded-0">
                    <div className="card-body d-none d-lg-flex" id="homeCard">
                        <h5 className="card-title"></h5>
                        <LinkContainer to="/project1">
                            <Nav.Link className="btn-btn-primary">latest project</Nav.Link>
                        </LinkContainer>
                    </div>
                </div>
            </div>
            <div className="socialbox text-center">
                <a href="https://www.linkedin.com/in/parker-graham-/" class="btn" role="button">
                    <Icon.Linkedin size={36} className="mr-3" style={{color:"#707070", backgroundColor: "transparent"}}/>
                </a>
                
                <a href="https://github.com/parker-graham" class="btn" role="button">
                    <Icon.Github size={36} className="" style={{color:"#707070"}}/>
                </a>
                <div/>
                <small style={{color:"#707070"}}>Photo by Trace Hudson from Pexels.</small>
            </div>
        </div>
    );
};

export default homepage;