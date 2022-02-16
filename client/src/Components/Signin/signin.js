import React, {useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signin.css";
import { useForm} from "react-hook-form";
import axios from "axios";

function Signin() {
    const { handleSubmit} = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkUser, setCheckuser]=useState(null);

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/");
        }
    })

    const Login = async () => {
    
        let result = await fetch("http://localhost:8797/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                email: email, 
                password: password 
            })
        });
        result = await result.json();
        if(result.success === '2'){
            localStorage.setItem("user-infor", { 
                email: email, 
                password: password 
            })
            navigate("/");
        }
        else{
            console.log(result.message);
        }
    }

    return(
        <div className="container-login">
            <h1>Đăng nhập</h1>
            <form>
                <div className="txt_field">
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <span></span>
                    <label>Email</label> 
                </div>
                <div className="txt_field">
                    <input type="password" name = "password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <span></span>
                    <label>Mật khẩu</label> 
                </div>
                <div className="pass">Quên mật khẩu?</div>
                <input type="button" value="Đăng nhập" className="btn-signin" onClick={Login}/>
                <div className="signup_link">
                    Chưa có tài khoản? <NavLink exact to = "/signup">Đăng ký</NavLink>
                </div>
            </form>
        </div>
    );

}

export default Signin;