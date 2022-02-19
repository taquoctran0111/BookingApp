import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState, } from "react";
import axios from "axios";
import LocaImage from "../../assets/image/dalat.jpg";
import "./detailhotel.css"
import {NavLink, useLocation,  useNavigate} from "react-router-dom";
import NoSmokeIcon from "../../assets/image/no-smoke.png";
import CarIcon from "../../assets/image/car.png";
import CarParkIcon from "../../assets/image/car-park.png";
import RoomServiceIcon from "../../assets/image/room-service.png";


function DetailHotel() {
    let location = useLocation();
    let idHotel = location.state.id;
    const navigate = useNavigate();
    const [hotel, setHotel] = useState([]);
    const checkUser = localStorage.getItem('user-infor');

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    useEffect(()=>{
        axios.get('http://localhost:8797/hotels/' + idHotel)
        .then(res => {
            setHotel(res.data.result.hotel);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return(
        <div className="detailhotel-container">
            <div className="detailhotel-container-left">
                <div className="detailhotel-header">
                    <div className="detailhotel-header-top">
                        <div className="detailhotel-name">{hotel.name}</div>
                        <div className="detailhotel-tag">Phù hợp cho 2 khách</div>
                        <div className="detailhotel-tag">Xe đưa đón sân bay</div>
                    </div>
                    <div className="detailhotel-header-address">
                        <div className="detailhotel-address">{hotel.address}</div>
                        <div className="detailhotel-address-tag">Vị trí tuyệt vời - Hiển thị bản đồ</div>
                    </div>
                </div>
                <div className="grid-detailhotel">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                        <Grid item xs={12} sm={6} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                        <Grid item xs={6} sm={3} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                        <Grid item xs={6} sm={3} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                        <Grid item xs={6} sm={3} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                        <Grid item xs={6} sm={3} className = "grid-detailhotel-container">
                            <img src = {LocaImage} alt ="" className="detailhotel-image"/>
                        </Grid>
                    </Grid>
                </div>
                <div className="detailhotel-desc-container">
                    <div className="detailhotel-desc" style={{marginTop: 30}}>
                        {hotel.description}
                    </div>
                    <div className="best-service-container" style={{marginTop: 30}}>
                        <div style={{fontWeight: "bold"}}>Các tiện nghi được ưa chuộng nhất</div>
                        <div className="best-service-area" style={{display: "flex", marginTop: 20}}>
                            <div className='best-service'>
                                <div className="best-service-icon">
                                    <img src = {NoSmokeIcon} alt="" className='service-img'/>
                                </div>
                                <div style={{fontSize: 14}}>Phòng không hút thuốc</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon"><img src = {CarIcon} alt="" className='service-img'/></div>
                                <div style={{fontSize: 14}}>Xe đưa đón sân bay</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon"><img src = {CarParkIcon} alt="" className='service-img'/></div>
                                <div style={{fontSize: 14}}>Chỗ đỗ xe miễn phí</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon"><img src = {RoomServiceIcon} alt="" className='service-img'/></div>
                                <div style={{fontSize: 14}}>Dịch vụ phòng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailhotel-container-right">
                <div style={{fontWeight: "bold", marginBottom: 15}}>Điểm nổi bật của chỗ nghỉ</div>
                <div>Hoàn hảo cho kỳ nghỉ 1 đêm!</div>
                <div>Địa điểm hàng đầu: Được khách gần đây đánh giá cao (8,2 điểm)</div>
                <div style={{fontWeight: "bold", marginTop: 15, marginBottom: 15}}>Phòng có:</div>
                <div>Nhìn ra vườn</div>
                <div>Có bãi đậu xe riêng miễn phí ở khách sạn này</div>
                <div style={{fontSize: 18, fontWeight: "bold", marginTop: 10, marginBottom: 30}}>Giá phòng: {hotel.price} VND</div>
                <NavLink className="btn-book" exact to = {checkUser ? "/reservation" : "/signin"} state={{id: idHotel, price: hotel.price}}>Đặt ngay</NavLink>
            </div>
            
        </div>
    )
}

export default DetailHotel;