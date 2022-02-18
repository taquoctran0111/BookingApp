import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "./reservation.css";
import axios from "axios";
function Reservation() {
    const [emailUser, setEmailUser] = useState("");
    const [username, setUsername] = useState("");
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [man, setMan] = useState(1);
    const [child, setChild] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const checkUser = localStorage.getItem('user-infor');
    const checkUserJson = JSON.parse(checkUser);
    const [userData, setUserData] = useState([]);   
    const email = checkUserJson ? checkUserJson.email : " ";
    useEffect(()=>{
        axios.get('http://localhost:8797/users/' + email)
                .then(res => {
                    setUserData(res.data.result);
                    setEmailUser(res.data.result.email);
                    setUsername(res.data.result.username);
                })
                .catch(err => {
                    console.log(err);
                })
    },[])

    const ConfirmInfo = () => {
        setTotalPrice("200000");
    }
    
    return(
        <div className="reservation-container">
            <div className="reservation-title">Nhập thông tin đặt phòng</div>
            <form>
                <div class = "input-reservation">
                    <label>Email</label>
                    <input type="email" value={emailUser} disabled/>
                </div>
                <div class = "input-reservation">
                    <label>Tên người dùng</label>
                    <input type="text" value={username} disabled/>
                </div>
                <div class = "input-reservation">
                    <label>Ngày nhận phòng</label>
                    <DatePicker
                        placeholderText="Ngày nhận phòng"
                        selected={checkIn}
                        selectsStart
                        startDate={checkIn}
                        endDate={checkOut}
                        onChange={date => setCheckIn(date)}
                        className = "date-reservation"
                        wrapperClassName="datePicker"
                    />
                </div>
                <div class = "input-reservation">
                    <label>Ngày trả phòng</label>
                    <DatePicker
                        placeholderText="Ngày trả phòng"
                        selected={checkOut}
                        selectsEnd
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={checkIn}
                        onChange={date => setCheckOut(date)}
                        className = "date-reservation"
                        wrapperClassName="datePicker"
                    />
                </div>
                <div class = "input-reservation">
                    <label>Nhập số người lớn</label>
                    <input className = "quantity-reservation" type="text" name="quatity-man" onChange={e => setMan(e.target.value)} placeholder="Người lớn"/>
                </div>
                <div class = "input-reservation">
                    <label>Nhập số trẻ con</label>
                    <input className = "quantity-reservation" type="text" name="quatity-child" onChange={e => setChild(e.target.value)} placeholder="Trẻ em"/>
                </div>
                <div class = "input-reservation">
                    <label>Tổng tiền phải thanh toán: </label>
                    <div style={{fontSize: 25, color: "#34568B"}}>{totalPrice} VND</div>
                </div>
                <button className="btn-book" onClick={ConfirmInfo()}>Xác nhận thông tin</button>
                <button className="btn-book">Thanh toán</button>
            </form>
        </div>
    );
}
export default Reservation;