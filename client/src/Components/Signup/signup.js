import {NavLink} from "react-router-dom";
import "./signup.css";
function Signup() {
    return(
        <div>
            <div className="center">
                <h1>Đăng ký</h1>
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
                    <div className="txt_field">
                        <input type="text"/>
                        <span></span>
                        <label>Email</label> 
                    </div>
                    <div className="txt_field">
                        <input type="text"/>
                        <span></span>
                        <label>Tên hiển thị</label> 
                    </div>
                    <input type="submit" value="Đăng ký" className="btn-signin"/>
                    <div className="signup_link">
                        Đã có tài khoản? <NavLink exact to = "/signin">Đăng nhập</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Signup;