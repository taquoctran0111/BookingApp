import Grid from '@material-ui/core/Grid';
import LocaImage from "../../assets/image/dalat.jpg";
import "./detailhotel.css"
function DetailHotel() {
    return(
        <div className="detailhotel-container">
            <div className="detailhotel-container-left">
                <div className="detailhotel-header">
                    <div className="detailhotel-header-top">
                        <div className="detailhotel-name">Dalat Maya Hotel</div>
                        <div className="detailhotel-tag">Phù hợp cho 2 khách</div>
                        <div className="detailhotel-tag">Xe đưa đón sân bay</div>
                    </div>
                    <div className="detailhotel-header-address">
                        <div className="detailhotel-address">Đà Lạt, Việt Nam</div>
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
                        Nằm ở thành phố Đà Lạt, cách Quảng trường Lâm Viên 2,2 km, Dalat Maya Hotel cung cấp chỗ nghỉ với nhà hàng, chỗ đỗ xe riêng miễn phí, quán bar và sảnh khách chung. Chỗ nghỉ còn có phòng gia đình và sân hiên. Tại đây cũng có lễ tân 24 giờ, dịch vụ phòng và dịch vụ thu đổi ngoại tệ.
                        Phòng nghỉ tại đây được trang bị TV truyền hình cáp màn hình phẳng, tủ lạnh, ấm đun nước, chậu rửa vệ sinh (bidet), máy sấy tóc và bàn làm việc. Các phòng của khách sạn còn có WiFi miễn phí, tủ để quần áo và phòng tắm riêng với vòi sen cùng đồ vệ sinh cá nhân miễn phí.
                        Hồ Xuân Hương và Công viên Yersin đều nằm trong bán kính 2,4 km từ Dalat Maya Hotel. Sân bay gần nhất là sân bay Liên Khương, cách đó 21 km, và chỗ nghỉ cung cấp dịch vụ đưa đón sân bay với một khoản phụ phí.
                        Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 8,3 cho kỳ nghỉ dành cho 2 người.
                    </div>
                    <div className="best-service-container" style={{marginTop: 30}}>
                        <div style={{fontWeight: "bold"}}>Các tiện nghi được ưa chuộng nhất</div>
                        <div className="best-service-area" style={{display: "flex", marginTop: 20}}>
                            <div className='best-service'>
                                <div className="best-service-icon">icon</div>
                                <div>Phòng không hút thuốc</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon">icon</div>
                                <div>Xe đưa đón sân bay</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon">icon</div>
                                <div>Chỗ đỗ xe miễn phí</div>
                            </div>
                            <div className='best-service'>
                                <div className="best-service-icon">icon</div>
                                <div>Dịch vụ phòng</div>
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
                <div className="btn-book">Đặt ngay</div>
            </div>
            
        </div>
    )
}

export default DetailHotel;