import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav pullRight>
        
          <Button className="hidden-xs hidden-sm" bsStyle="warning" fill>Points : 0</Button>

          <NavItem eventKey={1} href="http://ca.effe.org.in/account/">
            Account
          </NavItem>

          <NavItem eventKey={3} href="http://ca.effe.org.in/user_logout/">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
