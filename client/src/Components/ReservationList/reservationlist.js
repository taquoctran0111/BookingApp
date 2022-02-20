import LocaImage from "../../assets/image/dalat.jpg";
import axios from "axios";
import React, { useEffect, useState,useCallback, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
function ReservationList({ route }) {
    let location = useLocation();
    let idUser = location.state.userId;
    const [reservationList, setReservationList] = useState([]);
    const [hotel, setHotel] = useState([]);
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    useEffect(() => {
        axios.get('http://localhost:8797/reservations/users/' + idUser)
            .then(res => {
                setReservationList(res.data.result.reservationsUserId);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const ShowListReservation = () => {
        if (reservationList) {
            return (
                reservationList.map(reservation => {
                    const hotelId = reservation.hotel_id;
                    return (
                        <div>
                            <div className="hotel-container">
                                <img src={LocaImage} alt="" className="img-hotel" />
                                <div className="hotel-desc">
                                    <div className="hotel-location">
                                        <div className="hotel-name">{hotel.name}</div>
                                        <div className="hotel-tag">{hotel.address} - Cách trung tâm 1,6km</div>
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
                                            <div className="price">VND {numberWithCommas(reservation.total_price)}</div>
                                            <div className="price-desc">Giá thanh toán - Đã bao gồm thuế và phí</div>
                                        </div>
                                        <NavLink exact to="/reservationdetail" style={{ textDecoration: "none" }} state={{ reservationId: reservation.id, hotelId: hotelId }}>
                                            <div className="btn-detail" >Xem chi tiết thông tin đặt phòng</div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginTop: 20 }} />
                        </div>
                    );
                })
            );
        }
        else {
            <div>
                Danh sách phòng trống
            </div>
        }
    }
    return (
        <div className="listhotel-container">
            <div className="title">Danh sách khách sạn đã đặt</div>
            {ShowListReservation()}
        </div>
    );
}

export default ReservationList;