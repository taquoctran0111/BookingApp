import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/image/logo.png';
import Search from "../Search/search";
import './navbar.css'

function NavBar() {
    return(
        <div>
            <div className="header">
                <nav className="navbar">
                    <div className="nav-container">
                        <NavLink exact to = "/" className="nav-logo">
                            <img src = {logo} className = "logo-icon" alt=""/>
                            <span className='logo'>Booking</span>
                        </NavLink>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLink exact to = "/" className={({ isActive }) => isActive ? 'active' : 'nav-links'} >
                                    Đặt phòng
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to = "/travel" className={({ isActive }) => isActive ? 'active' : 'nav-links'}>
                                    Địa điểm du lịch
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div style={{display: "flex"}}>
                        <NavLink className="button-active" exact to = "/signin">
                            Đăng nhập
                        </NavLink>
                        {/* <div className="button-active">Đăng nhập</div> */}
                        <NavLink className="button" exact to = "/signup">
                            Đăng ký
                        </NavLink>
                    </div>
                </nav>
                <Search />
            </div>
            <Outlet />
        </div>
    );
}

export default NavBar;