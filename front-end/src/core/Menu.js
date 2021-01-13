import { Link, withRouter } from "react-router-dom";
import {isAuthenticated, signout} from '../auth';
              
 const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#CC0033" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-warning d-flex justify-content-end">
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
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
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