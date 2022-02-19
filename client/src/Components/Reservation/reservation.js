import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import {NavLink, useLocation,  useNavigate} from "react-router-dom";
import moment from "moment";
import "./reservation.css";
import axios from "axios";
function Reservation() {
    let location = useLocation();
    let idHotel = location.state.id;
    let priceHotel = location.state.price;
    const [errorLog, setErrorLog] = useState("");
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

    const navigate = useNavigate();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

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

    const userId = userData.id;
    const checkInDay = moment(checkIn).get('date');
    const checkOutDay = moment(checkOut).get('date');
    const numStay = checkOutDay - checkInDay;
    const totalPriceCal = priceHotel * numStay * man;

    const ConfirmInfo = () => {
        setTotalPrice(totalPriceCal);
    }

    const CreateReservation = async () => {
        const ReservationData = JSON.stringify({ 
            user_id: userId,
            hotel_id: idHotel,
            room_id: 1,
            start_date: moment(checkIn).format("yyyy-MM-DD"),
            end_date: moment(checkOut).format("yyyy-MM-DD"),
            num_stay: numStay,
            num_adult: man, 
            num_child: child,
            total_price: totalPriceCal
        })
        let result = await fetch("http://localhost:8797/reservations/",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: ReservationData
        });
        result = await result.json();
        if(result.data){
            navigate("/reservationlist");
        }
        else{
            setErrorLog(result.message);
        }
    }
    
    return(
        <div className="reservation-container">
            <div className="reservation-title">Nhập thông tin đặt phòng</div>
            <form>
                <div className="error">{errorLog}</div>
                <div class = "input-reservation">
                    <label>Email</label>
                    <input type="email" value={emailUser} disabled/>
                </div>
                <div class = "input-reservation">
                    <label>Tên người dùng</label>
                    <input type="text" value={username} disabled/>
                </div>
                <div class = "input-reservation">
                    <label>Giá phòng(1 người/1 đêm)(VND)</label>
                    <input type="text" value={numberWithCommas(priceHotel)} disabled/>
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
                    <div style={{fontSize: 25, color: "#34568B"}}>{numberWithCommas(totalPrice)} VND</div>
                </div>
                <input type="button" value="Xác nhận thông tin" className="btn-book" onClick={ConfirmInfo}/>
                <input type="button" value="Thanh toán" className="btn-book" onClick={CreateReservation}/>
            </form>
        </div>
    );
}
export default Reservation;