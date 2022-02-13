import React from "react";
import "./home.css";
import Grid from '@material-ui/core/Grid';
import SaleLogo from "../../../assets/image/sale-icon.png";
import SaleImage from "../../../assets/image/sale-image.jpg";
import LocaImage from "../../../assets/image/dalat.jpg";

function Home() {
    return(
        <div className="container">
            <div className="title-container">
                <img src = {SaleLogo} alt="" className="sale-logo"/>
                <label className="title">Tìm kiếm các ưu đãi</label>   
            </div>
            <div className="sale-container">
                <img src = {SaleImage} alt = "" className="sale-image"/>
                <div className="sale-desc">
                    <div className="slogan">Tìm kiếm những ưu đãi tốt nhất cho bạn trong năm 2022</div>
                    <div className="desc">Rất nhiều ưu đãi hấp dẫn từ các khách sạn dành cho bạn</div>
                    <button className="sale-button">Tìm kiếm ưu đãi</button>
                </div>
            </div>
            <div className="location-grid">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className = "grid-container">
                        <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className = "grid-container">
                       <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className = "grid-container">
                        <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className = "grid-container">
                        <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className = "grid-container">
                        <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3} className = "grid-container">
                        <img src = {LocaImage} alt ="" className="location-image"/>
                        <div className="location-desc">
                            <div>Đà Lạt</div>
                            <div>2,100 chỗ ở</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div >

            </div>
        </div>
    );
}
export default Home;