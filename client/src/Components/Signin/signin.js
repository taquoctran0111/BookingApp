import { NavLink } from "react-router-dom";
import "./signin.css";

function Signin() {
    return(
        <div className="container-login">
            <h1>Đăng nhập</h1>
            <form>
                <div className="txt_field">
                    <input type="text"/>
                    <span></span>
                    <label>Tên đăng nhập</label> 
                </div>
                <div className="txt_field">
                    <input type="password"/>
                    <span></span>
                    <label>Mật khẩu</label> 
                </div>
                <div className="pass">Quên mật khẩu?</div>
                <input type="submit" value="Đăng nhập" className="btn-signin"/>
                <div className="signup_link">
                    Chưa có tài khoản? <NavLink exact to = "/signup">Đăng ký</NavLink>
                </div>
            </form>
        </div>
    );

}

export default Signin;