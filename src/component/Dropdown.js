//Dropdown.js
import React, { useRef, useState } from "react";
import './dropdown.scss';
import pdf from '../files/ParkerGraham_Resume.pdf';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="menu-container" >
      <Link className="title" to="/">Title Text</Link>
      <nav className="navigation" id="navbar"> 
        <Link className="menu-trigger" to="/projects">projects</Link>
        <ul className="menu">
          <Link className="dropdownLink" to="/project1">project1</Link> <hr className='solid'></hr>
          <Link className="dropdownLink" to="/project2">project2</Link> <hr className='solid'></hr>
          <Link className="dropdownLink" to="/project3">project3</Link>
        </ul>
        <p className="navList">/</p>
        <Link className="navList1" to="/resume">résumé</Link>
        <p className="navList">/</p>
        <Link className="navList2" to="/about">about me</Link>
      </nav>
    </div>
  );
};

export default DropdownMenu;
