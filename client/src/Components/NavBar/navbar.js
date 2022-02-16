import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from '../../assets/image/logo.png';
import Search from "../Search/search";
import './navbar.css'

function NavBar() {
    const navigate = useNavigate();
    const checkUser = localStorage.getItem('user-infor');

    const checkUserUI = () => {
        const logOut = () => {
            localStorage.removeItem('user-infor');
            navigate('/')
            // console.log(checkUser.email);
        }
        if(checkUser){
            return(
                <div style={{display: "flex"}}>
                    <div>Xin chào {checkUser.email}</div>
                    <div className="button" onClick={logOut}>Đăng xuất</div>
                </div>
            );
        }
        else{
            return(
                <div style={{display: "flex"}}>
                        <NavLink className="button-active" exact to = "/signin">
                            Đăng nhập
                        </NavLink>
                        <NavLink className="button" exact to = "/signup">
                            Đăng ký
                        </NavLink>
                </div>
            );
        }
    }
    
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
                    {checkUserUI()}
                </nav>
                <Search />
            </div>
            <Outlet />
        </div>
    );
}

export default NavBar;