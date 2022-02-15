import React from "react";
import Grid from '@material-ui/core/Grid';
import LocaImage from "../../../assets/image/dalat.jpg";
import FerrisIcon from "../../../assets/image/ferris.png";
import ReservationIcon from "../../../assets/image/booking-confirmed.png";
import CskhIcon from "../../../assets/image/iconcskh.png";
import "./travel.css";

function Travel() {
    return(
        <div className="container-travel">
            <div className="discovery-travel">
                <div className="title-container">
                    <label className="title">Các địa điểm nổi bật</label>   
                </div>
                <div className="travel-grid">
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={4} className = "grid-container-travel">
                            <img src = {LocaImage} alt ="" className="travel-image"/>
                            <div className="travel-desc">
                                <div>Đà Lạt</div>
                                <div>2,100 chỗ ở</div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} className = "grid-container-travel">
                            <img src = {LocaImage} alt ="" className="travel-image"/>
                            <div className="travel-desc">
                                <div>Đà Lạt</div>
                                <div>2,100 chỗ ở</div>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4} className = "grid-container-travel">
                            <img src = {LocaImage} alt ="" className="travel-image"/>
                            <div className="travel-desc">
                                <div>Đà Lạt</div>
                                <div>2,100 chỗ ở</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <hr/>
            <div className="travel-service">
                <div className="title-container">
                    <label className="title" style={{marginTop: 30, marginBottom: 30}}>Bạn cứ vô tư khám phá, những thứ khác chúng tôi lo</label>   
                </div>
                <div className="service-container">
                    <div className="service">
                        <img className="service-icon" src = {FerrisIcon} alt=""/>
                        <div className="service-desc">
                            <div className="service-title">Khám phá các địa điểm tham quan hàng đầu</div>
                            <div className="service-text">Trải nghiệm những điều tuyệt vời nhất tại điểm đến với các địa điểm tham quan, tour và nhiều hoạt động khác</div>
                        </div>  
                    </div>
                    <div className="service">
                        <img className="service-icon" src = {ReservationIcon} alt=""/>
                        <div className="service-desc">
                            <div className="service-title">Nhanh chóng và linh hoạt</div>
                            <div className="service-text">Đặt vé online trong vài phút với lựa chọn hủy miễn phí ở nhiều địa điểm quan tham</div>
                        </div>  
                    </div>
                    <div className="service">
                        <img className="service-icon" src = {CskhIcon} alt=""/>
                        <div className="service-desc">
                            <div className="service-title">Được trợ giúp khi bạn cần</div>
                            <div className="service-text">Đội ngũ Dịch vụ Khách hàng toàn cầu của Booking sẽ luôn có mặt để hỗ trợ bạn 24/7</div>
                        </div>  
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}
export default Travel;