import React, { useEffect, useState } from "react";
import axios from "axios";
import LocaImage from "../../assets/image/dalat.jpg";
import Footer from "../Footer/footer";
import {NavLink,useLocation} from "react-router-dom";
import "./listhotel.css";
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function ListHotel() {
    let location = useLocation();
    let idLocation = location.state.id;
    let nameLocation = location.state.name;
    const [hotelsCity, setHotelsCity] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8797/hotels/city/' + idLocation)
        .then(res => {
            setHotelsCity(res.data.result.hotels);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    return(
        <div className="listhotel-container">
            <div className="title">{nameLocation}: tìm thấy {hotelsCity.length} chỗ nghỉ</div>
            {hotelsCity.map(hotelCity=>(
                <div>
                    <div className="hotel-container">
                        <img src={LocaImage} alt ="" className="img-hotel"/>
                        <div className="hotel-desc">
                            <div className="hotel-location">
                                <div className="hotel-name">{hotelCity.name}</div>
                                <div className="hotel-tag">{hotelCity.address} - Cách trung tâm 1,6km</div>
                                <div className="hotel-sale">Ưu Đãi Trong Thời Gian Có Hạn</div>
                            </div>
                            <div className="hotel-rate">
                                <div className="rate-area">
                                    <div className="rate-text-area">
                                        <div className="rate-text">Tuyệt vời</div>
                                        <div className="rate-vote">38 đánh giá</div>
                                    </div>
                                    <div className="rate-number">8.6</div>
                                </div>
                                <div className="price-area">
                                    <div className="price">VND {numberWithCommas(hotelCity.price)}</div>
                                    <div className="price-desc">Đã bao gồm thuế và phí</div>
                                </div>
                                <NavLink exact to = "/detailhotel" state={{id: hotelCity.id}} style={{textDecoration: "none"}}>
                                    <div className="btn-detail">Xem chi tiết</div>
                                </NavLink>  
                            </div>
                        </div>
                    </div>
                    <hr style={{marginTop: 20}}/>
                </div>
            ))}
        </div>
    );
}
export default ListHotel;