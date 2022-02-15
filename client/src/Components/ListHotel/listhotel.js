import LocaImage from "../../assets/image/dalat.jpg";
import Footer from "../Footer/footer";
import {NavLink} from "react-router-dom";
import "./listhotel.css";

function ListHotel() {
    return(
        <div className="listhotel-container">
            <div className="title">Đà Lạt: tìm thấy 554 chỗ nghỉ</div>
            <div>
                <div className="hotel-container">
                    <img src={LocaImage} alt ="" className="img-hotel"/>
                    <div className="hotel-desc">
                        <div className="hotel-location">
                            <div className="hotel-name">Dalat Maya Hotel</div>
                            <div className="hotel-tag">Đà Lạt - Cách trung tâm 1,6km</div>
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
                                <div className="price">VND 413.000</div>
                                <div className="price-desc">Đã bao gồm thuế và phí</div>
                            </div>
                            <NavLink exact to = "/detailhotel" style={{textDecoration: "none"}}>
                                <div className="btn-detail">Xem chi tiết</div>
                            </NavLink>  
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: 20}}/>
            </div>
            <div>
                <div className="hotel-container">
                    <img src={LocaImage} alt ="" className="img-hotel"/>
                    <div className="hotel-desc">
                        <div className="hotel-location">
                            <div className="hotel-name">Dalat Maya Hotel</div>
                            <div className="hotel-tag">Đà Lạt - Cách trung tâm 1,6km</div>
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
                                <div className="price">VND 413.000</div>
                                <div className="price-desc">Đã bao gồm thuế và phí</div>
                            </div>
                            <NavLink exact to = "/detailhotel" style={{textDecoration: "none"}}>
                                <div className="btn-detail">Xem chi tiết</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: 20}}/>
            </div>
            <div>
                <div className="hotel-container">
                    <img src={LocaImage} alt ="" className="img-hotel"/>
                    <div className="hotel-desc">
                        <div className="hotel-location">
                            <div className="hotel-name">Dalat Maya Hotel</div>
                            <div className="hotel-tag">Đà Lạt - Cách trung tâm 1,6km</div>
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
                                <div className="price">VND 413.000</div>
                                <div className="price-desc">Đã bao gồm thuế và phí</div>
                            </div>
                            <NavLink exact to = "/detailhotel" style={{textDecoration: "none"}}>
                                <div className="btn-detail">Xem chi tiết</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: 20}}/>
            </div>
            <div>
                <div className="hotel-container">
                    <img src={LocaImage} alt ="" className="img-hotel"/>
                    <div className="hotel-desc">
                        <div className="hotel-location">
                            <div className="hotel-name">Dalat Maya Hotel</div>
                            <div className="hotel-tag">Đà Lạt - Cách trung tâm 1,6km</div>
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
                                <div className="price">VND 413.000</div>
                                <div className="price-desc">Đã bao gồm thuế và phí</div>
                            </div>
                            <NavLink exact to = "/detailhotel" style={{textDecoration: "none"}}>
                                <div className="btn-detail">Xem chi tiết</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: 20}}/>
            </div>
        </div>
    );
}
export default ListHotel;