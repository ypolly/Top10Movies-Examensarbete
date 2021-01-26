import { Link, withRouter } from "react-router-dom";
import {isAuthenticated, signout} from '../auth';
import { itemTotal } from "./cartHelpers";

              
 const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#CC0033" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div className="customnav">
        <ul className=" customnav nav nav-tabs  d-flex justify-content-center align-content-center">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li>


            <li className="nav-item">
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
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/account")}
                        to="/user/account"
                    >
                        Account
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/account")}
                        to="/admin/account"
                    >
                        Account
                    </Link>
                </li>
            )}
            { !isAuthenticated() &&
            <>  
                <li className="nav-item">
            <Link
                className="nav-link"
                style={isActive(history, "/signin")}
                to="/signin"
            >
                Signin
            </Link>
        </li>
        
        <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
        </>}
                  
 
                    {isAuthenticated() &&
                  (<>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{cursor: 'pointer', color: '#ffffff'}}
                            onClick={() => signout(() => {
                                history.push('/');
                            })}
                        >
                            Signout
                        </span>
                    </li> 
                    </>) }
        </ul>
       
    </div>
);

export default withRouter(Menu);