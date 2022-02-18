import React, {useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";
function Signup() {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [errorLog, setErrorLog] = useState("");

    const CreateUser = async () => {
        let result = await fetch("http://localhost:8797/users",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                username: username,
                email: email, 
                password: password,
                password_confirmation: rePassword
            })
        });
        result = await result.json();
        if(result.success==="1"){
            navigate("/signin");
        }
        else{
            setErrorLog(result.message);
        }
    }
    return(
        <div>
            <div className="center">
                <h1>Đăng ký</h1>
                <form>
                    <div className="error">{errorLog}</div>
                    <div className="txt_field">
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <span></span>
                        <label>Email</label> 
                    </div>
                    <div className="txt_field">
                        <input type="text" name="username" value={username} onChange={e => setUserName(e.target.value)}/>
                        <span></span>
                        <label>Tên hiển thị</label> 
                    </div>
                    <div className="txt_field">
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <span></span>
                        <label>Mật khẩu</label> 
                    </div>
                    <div className="txt_field">
                        <input type="password" name="repassword" value={rePassword} onChange={e => setRePassword(e.target.value)}/>
                        <span></span>
                        <label>Nhập lại mật khẩu</label> 
                    </div>   
                    <input type="button" value="Đăng ký" className="btn-signin" onClick={CreateUser}/>
                    <div className="signup_link">
                        Đã có tài khoản? <NavLink exact to = "/signin">Đăng nhập</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Signup;