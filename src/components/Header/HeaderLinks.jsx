import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";
const URL = 'http://ca.effe.org.in/api/regular_user/';
const token = localStorage.getItem('token');
class HeaderLinks extends Component {
  constructor(props){
  super(props);

  this.state = {
    user:'',


  }
}
componentDidMount(){

fetch(URL,
{ method:'GET',
headers:{
         "Content-Type": "application/json",
         'Authorization': `Token ${token}`,
         'Access-Control-Allow-Origin': '*',
     },

})

.then(response =>
  {this.setState({user:response});
  console.log(this.state.user);
  })
.catch(function (error)
{
  console.log(error);
});
}
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
