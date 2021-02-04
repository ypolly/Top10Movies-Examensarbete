import { Link, withRouter } from "react-router-dom";
import {isAuthenticated, signout} from '../auth';
import { itemTotal } from "./cartHelpers";
import {
    Navbar,
    Nav
  } from "react-bootstrap";
              
 const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#CC0033" };
    } else {
        return { color: "#ffffff" };
    }
};



const Menu = ({ history }) => (

<Navbar className="customnav"  expand="lg">
      <Navbar.Brand href="#home"><h2 classsName="logo">Top10Movies</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
            <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
            </Link>
            <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
            </Link>
            <Link
                    className="nav-link"
                    style={isActive(history, "/aboutus")}
                    to="/aboutus"
                >
                    About Us
            </Link>
            <Link
                    className="nav-link"
                    style={isActive(history, "/contactus")}
                    to="/contactus"
                >
                    Contact Us
            </Link>
            <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
            </Link>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
               
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/account")}
                        to="/user/account"
                    >
                        Account
                    </Link>
               
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
               
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/account")}
                        to="/admin/account"
                    >
                        Account
                    </Link>
               
            )}
            { !isAuthenticated() &&
            <>  
              
            <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
            >
                Signin
            </Link>
       
        
      
            <Link
                className="nav-link"
                style={isActive(history, "/signup")}
                to="/signup"
            >
                Signup
            </Link>
                   
        </>}
                  
 
          {isAuthenticated() &&
        (<>
          
              <span
                  className="nav-link"
                  style={{cursor: 'pointer', color: '#ffffff'}}
                  onClick={() => signout(() => {
                      history.push('/');
                  })}
              >
                  Signout
              </span>
          
          </>) }
          
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
           
);

export default withRouter(Menu);