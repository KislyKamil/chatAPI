import React, {Component} from 'react';
import './Layout.css'
import Aux from '../Auxiliary/Auxiliary';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {NavItem} from "react-bootstrap";


class Layout extends Component {

    render() {

        return (
            <Aux>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <NavLink to='/' exact>
                        <p>Chat App</p>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <NavItem>
                            <NavLink to="/Login" text="Sign in">
                                <p className="sign-link">Sign in</p>
                            </NavLink>
                        </NavItem>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Layout;